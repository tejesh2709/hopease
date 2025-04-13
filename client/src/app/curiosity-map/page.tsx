"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Sidebar } from "@/components/index";
import { motion, AnimatePresence } from "framer-motion";

// Define environment variable for backend URL with a fallback
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001/api";

// Define types for the API response structure
type Level = {
  levelTitle: string;
  description: string;
  xp: number;
  progress?: number; // Add progress tracking
};

type Hobby = {
  id: number;
  name: string;
  icon: string;
  progress: number;
  level: number;
  description: string;
  levels?: Level[];
};

// Initial hobby data without levels (levels will be fetched from API)
const hobbies: Hobby[] = [
  {
    id: 1,
    name: "Movie",
    icon: "🎬",
    progress: 33,
    level: 1,
    description: "Immerse Yourself in Cinematic Worlds",
  },
  {
    id: 2,
    name: "Photography",
    icon: "📷",
    progress: 12,
    level: 1,
    description: "Master composition, lighting, and post-processing",
  },
  {
    id: 3,
    name: "Gardening",
    icon: "🌱",
    progress: 0,
    level: 0,
    description: "Grow your own plants and create beautiful green spaces",
  },
  {
    id: 4,
    name: "Origami",
    icon: "✂️",
    progress: 0,
    level: 0,
    description:
      "Discover the Meditative Art of Transforming Paper into Masterpieces",
  },
  {
    id: 5,
    name: "Cooking",
    icon: "🍳",
    progress: 0,
    level: 0,
    description: "Discover recipes and techniques from around the world",
  },
  {
    id: 6,
    name: "Music Production",
    icon: "🎵",
    progress: 0,
    level: 0,
    description: "Create your own songs using modern production software",
  },
  {
    id: 7,
    name: "Meditation",
    icon: "🧘",
    progress: 0,
    level: 0,
    description: "Learn mindfulness techniques for mental wellbeing",
  },
  {
    id: 8,
    name: "Writing",
    icon: "✏️",
    progress: 0,
    level: 0,
    description: "Develop your storytelling and narrative skills",
  },
];

const CuriosityMap: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredHobby, setHoveredHobby] = useState<number | null>(null);
  const [expandedHobby, setExpandedHobby] = useState<number | null>(null);
  const [hobbiesData, setHobbiesData] = useState<Hobby[]>(hobbies);
  const [isLoadingLevels, setIsLoadingLevels] = useState(false);
  const [levelFetchError, setLevelFetchError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to fetch hobby levels from the API
  const fetchHobbyLevels = async (hobby: Hobby) => {
    if (hobby.levels) {
      // Levels already loaded, no need to fetch
      return;
    }

    setIsLoadingLevels(true);
    setLevelFetchError(null);

    try {
      const response = await fetch(
        `${BACKEND_URL}/levels/${encodeURIComponent(hobby.name)}`,{method: "POST"}
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch levels: ${response.status}`);
      }

      const levelsData = await response.json();

      // Add default progress to each level
      const levelsWithProgress = levelsData.map(
        (level: Level, index: number) => ({
          ...level,
          progress: index === 0 ? (hobby.progress > 0 ? 25 : 0) : 0,
        })
      );

      // Update the hobby with fetched levels
      setHobbiesData((prevHobbies) =>
        prevHobbies.map((h) =>
          h.id === hobby.id ? { ...h, levels: levelsWithProgress } : h
        )
      );
    } catch (error) {
      console.error("Error fetching hobby levels:", error);
      setLevelFetchError(
        error instanceof Error ? error.message : "Failed to load levels"
      );
    } finally {
      setIsLoadingLevels(false);
    }
  };

  // Toggle expanded state for a hobby and fetch levels if needed
  const toggleHobbyExpansion = async (id: number) => {
    if (expandedHobby === id) {
      // Closing the expanded hobby
      setExpandedHobby(null);
    } else {
      // Opening a new hobby
      setExpandedHobby(id);
      const hobbyToExpand = hobbiesData.find((h) => h.id === id);
      if (hobbyToExpand && !hobbyToExpand.levels) {
        await fetchHobbyLevels(hobbyToExpand);
      }
    }
  };

  // Find the expanded hobby
  const currentExpandedHobby =
    expandedHobby !== null
      ? hobbiesData.find((h) => h.id === expandedHobby)
      : null;

  // Calculate total XP for a hobby based on level progress
  const calculateTotalXP = (hobby: Hobby): number => {
    if (!hobby.levels) return 0;

    return hobby.levels.reduce((total, level, index) => {
      const levelProgress = level.progress || 0;
      // Only add XP for levels with progress
      if (levelProgress > 0) {
        // If it's complete (100%), add full XP, otherwise add proportional XP
        if (levelProgress === 100) {
          return total + level.xp;
        } else {
          return total + Math.floor((level.xp * levelProgress) / 100);
        }
      }
      return total;
    }, 0);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0d0d0d] text-[#f5f5f7] font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]">
      <Sidebar />
      <main className="flex-1 flex flex-col p-6 overflow-hidden">
        {/* Minimal Top Bar - Modified with name on left, XP/level on right */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between bg-[#1a1a1a] rounded-xl p-4 shadow-md border border-[#2a2a2a] mb-8"
        >
          {/* Name on left */}
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-[#252525] flex items-center justify-center text-sm font-medium">
              A
            </div>
            <h2 className="text-lg font-medium">Ash</h2>
          </div>

          {/* XP and Level on right */}
          <div className="flex items-center space-x-4">
            {/* Level and XP info */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center px-3 py-1.5 rounded-lg bg-[#252525] border border-[#333333]">
                <svg
                  className="h-4 w-4 mr-1.5 text-purple-400/80"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V3zm1 0v6h6V3H7zm0 8a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H7zm0 1v6h6v-6H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Level 1</span>
              </div>

              <div className="flex items-center px-3 py-1.5 rounded-lg bg-[#252525] border border-[#333333]">
                <svg
                  className="h-4 w-4 mr-1.5 text-amber-400/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 10-2 0v1.188C7.09 4.602 6 5.934 6 7.5 6 9.16 7.09 10.492 9 10.926V13a1 1 0 102 0v-2.074c1.91-.434 3-1.766 3-3.426 0-1.566-1.09-2.898-3-3.312V3zm-1 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                </svg>
                <span className="text-sm">105 XP</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Centered Hobby List */}
        <div className="flex-1 flex flex-col items-center overflow-hidden">
          <div className="flex justify-between items-center w-full max-w-2xl px-2 mb-4">
            <h1 className="text-2xl font-medium">Your Hobbies</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg flex items-center space-x-1.5"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Discover</span>
            </motion.button>
          </div>

          {/* Scrollable List */}
          <div className="w-full max-w-2xl overflow-y-auto flex-1 pr-1">
            <motion.ul className="space-y-3 pb-6">
              {hobbiesData.map((hobby, index) => (
                <motion.li
                  key={hobby.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 transition-all duration-200 ${
                    expandedHobby === hobby.id
                      ? "shadow-md border-[#333333]"
                      : hoveredHobby === hobby.id
                      ? "shadow-sm border-[#333333]"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredHobby(hobby.id)}
                  onMouseLeave={() => setHoveredHobby(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-[#252525] flex items-center justify-center text-xl">
                        {hobby.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-base">{hobby.name}</h3>
                        <p className="text-xs text-gray-400 truncate">
                          {hobby.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Progress indicator */}
                      {hobby.progress > 0 && (
                        <div className="hidden md:flex items-center space-x-3 min-w-[120px]">
                          <div className="w-full h-1.5 bg-[#252525] rounded-full overflow-hidden flex-1">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${hobby.progress}%` }}
                              transition={{
                                duration: 0.8,
                                delay: 0.2 + index * 0.05,
                              }}
                              className={`h-full rounded-full ${
                                hobby.progress > 0
                                  ? "bg-purple-500/60"
                                  : "bg-gray-600"
                              }`}
                            />
                          </div>
                          <span className="text-xs whitespace-nowrap">
                            {hobby.progress}%
                          </span>
                        </div>
                      )}

                      {/* Action button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleHobbyExpansion(hobby.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          hobby.progress > 0
                            ? "bg-white/10 text-white hover:bg-white/15 border border-purple-500/30"
                            : "bg-[#252525] text-gray-300 hover:bg-[#2a2a2a]"
                        }`}
                      >
                        {expandedHobby === hobby.id
                          ? "Close"
                          : hobby.progress > 0
                          ? "Continue"
                          : "Start"}
                      </motion.button>
                    </div>
                  </div>

                  {/* Mobile view progress bar */}
                  {hobby.progress > 0 && expandedHobby !== hobby.id && (
                    <div className="mt-3 md:hidden flex items-center space-x-2">
                      <div className="w-full h-1.5 bg-[#252525] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${hobby.progress}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full rounded-full bg-purple-500/60"
                        />
                      </div>
                      <span className="text-xs whitespace-nowrap text-gray-400">
                        {hobby.progress}%
                      </span>
                    </div>
                  )}

                  {/* Expanded Level Structure View */}
                  <AnimatePresence>
                    {expandedHobby === hobby.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-4 border-t border-[#2a2a2a]">
                          <h4 className="text-sm font-medium mb-4 flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-purple-400/80"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Adventure Path
                          </h4>

                          {/* Loading state */}
                          {isLoadingLevels && (
                            <div className="flex justify-center items-center py-8">
                              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                              <span className="ml-3 text-sm text-gray-400">
                                Loading quests...
                              </span>
                            </div>
                          )}

                          {/* Error state */}
                          {levelFetchError && (
                            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4 text-center">
                              <p className="text-red-400 text-sm">
                                {levelFetchError}
                              </p>
                              <button
                                onClick={() => {
                                  if (currentExpandedHobby) {
                                    fetchHobbyLevels(currentExpandedHobby);
                                  }
                                }}
                                className="mt-2 px-3 py-1.5 bg-[#2a2a2a] rounded-lg text-xs text-white hover:bg-[#333333] transition-colors"
                              >
                                Retry
                              </button>
                            </div>
                          )}

                          {/* Levels list */}
                          {!isLoadingLevels &&
                            !levelFetchError &&
                            currentExpandedHobby?.levels && (
                              <div className="space-y-4">
                                {currentExpandedHobby.levels.map(
                                  (level, levelIndex) => (
                                    <motion.div
                                      key={levelIndex}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        delay: levelIndex * 0.1,
                                        duration: 0.3,
                                      }}
                                      className={`bg-[#222222] rounded-lg p-4 border ${
                                        level.progress && level.progress > 0
                                          ? level.progress === 100
                                            ? "border-[#404040]"
                                            : "border-purple-900/30"
                                          : "border-[#2a2a2a]"
                                      }`}
                                    >
                                      {/* Level header with XP */}
                                      <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center space-x-3">
                                          <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                              level.progress === 100
                                                ? "bg-white text-black"
                                                : level.progress &&
                                                  level.progress > 0
                                                ? "bg-purple-900/40 text-purple-200"
                                                : "bg-[#2a2a2a] text-gray-400"
                                            }`}
                                          >
                                            {levelIndex + 1}
                                          </div>

                                          <div>
                                            <div className="flex items-center">
                                              <h5 className="font-medium">
                                                {level.levelTitle}
                                              </h5>
                                              {level.progress === 100 && (
                                                <svg
                                                  className="w-4 h-4 ml-2 text-green-500"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                  />
                                                </svg>
                                              )}
                                            </div>
                                          </div>
                                        </div>

                                        <div className="flex items-center space-x-1 px-2.5 py-1 bg-[#1a1a1a]/50 rounded-lg">
                                          <svg
                                            className="w-3.5 h-3.5 text-amber-400/80"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path d="M11 3a1 1 0 10-2 0v1.188C7.09 4.602 6 5.934 6 7.5 6 9.16 7.09 10.492 9 10.926V13a1 1 0 102 0v-2.074c1.91-.434 3-1.766 3-3.426 0-1.566-1.09-2.898-3-3.312V3zm-1 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                          </svg>
                                          <span className="text-xs font-medium text-amber-400/90">
                                            {level.xp} XP
                                          </span>
                                        </div>
                                      </div>

                                      {/* Level description */}
                                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                        {level.description}
                                      </p>

                                      <div className="flex justify-between items-center">
                                        {/* Level progress bar */}
                                        {level.progress &&
                                          level.progress > 0 &&
                                          level.progress < 100 && (
                                            <div className="flex-1 flex items-center space-x-2 mr-4">
                                              <div className="w-full h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
                                                <motion.div
                                                  initial={{ width: 0 }}
                                                  animate={{
                                                    width: `${level.progress}%`,
                                                  }}
                                                  transition={{
                                                    duration: 0.6,
                                                    delay:
                                                      0.3 + levelIndex * 0.1,
                                                  }}
                                                  className="h-full rounded-full bg-purple-500/60"
                                                />
                                              </div>
                                              <span className="text-xs whitespace-nowrap text-gray-400">
                                                {level.progress}%
                                              </span>
                                            </div>
                                          )}

                                        {/* Action button */}
                                        {level.progress !== 100 && (
                                          <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                                              levelIndex === 0 ||
                                              (levelIndex > 0 &&
                                                currentExpandedHobby.levels &&
                                                currentExpandedHobby.levels[
                                                  levelIndex - 1
                                                ].progress === 100)
                                                ? level.progress &&
                                                  level.progress > 0
                                                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                                  : "bg-white/10 text-white hover:bg-white/15"
                                                : "bg-[#2a2a2a]/50 text-gray-500 cursor-not-allowed"
                                            }`}
                                            disabled={
                                              levelIndex > 0 &&
                                              currentExpandedHobby.levels &&
                                              currentExpandedHobby.levels[
                                                levelIndex - 1
                                              ].progress !== 100
                                            }
                                          >
                                            {level.progress &&
                                            level.progress > 0
                                              ? "Continue Quest"
                                              : "Begin Quest"}
                                          </motion.button>
                                        )}

                                        {level.progress === 100 && (
                                          <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2a2a2a]/50 text-gray-400">
                                            Quest Complete
                                          </span>
                                        )}
                                      </div>
                                    </motion.div>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Footer Info */}
          <div className="text-xs text-center text-gray-500 py-2 w-full max-w-2xl">
            Embark on your adventure and develop new skills at your own pace
          </div>
        </div>
      </main>
    </div>
  );
};

export default CuriosityMap;