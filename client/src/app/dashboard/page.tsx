"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";

const LearnPage: NextPage = () => {
  // State for hover effects and animations
  const [activeNav, setActiveNav] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showXpAnimation, setShowXpAnimation] = useState(false);

  // Simulating page load
  useEffect(() => {
    setIsLoaded(true);

    // Show XP animation after a delay
    const timer = setTimeout(() => {
      setShowXpAnimation(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex bg-[#0d0d0d] text-[#f5f5f7] font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]">
      {/* Sidebar with frosted glass effect */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-72 backdrop-blur-xl bg-[#121212]/80 flex flex-col p-8 space-y-8 shadow-2xl relative z-10 border-r border-[#2a2a2a]"
      >
        {/* Logo / Name with 3D effect */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-extrabold pb-6 border-b border-[#2a2a2a]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            Hop
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
            Ease
          </span>
        </motion.div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          {[
            {
              id: "home",
              name: "Home",
              icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
            },
            {
              id: "map",
              name: "Curiosity Map",
              icon: "M5 4v16c0 1.1.9 2 2 2h13V4H5zm2 2h9v12H7V6zm-3 0H2v16c0 1.1.9 2 2 2h1V6z",
            },
            {
              id: "spaces",
              name: "Spaces",
              icon: "M16 6V4a4 4 0 00-8 0v2H3v2h1l1.44 12.14A2 2 0 007.42 22h9.16a2 2 0 002-1.86L20 8h1V6h-5zM10 4a2 2 0 014 0v2h-4V4z",
            },
            {
              id: "profile",
              name: "Profile",
              icon: "M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-2.72 0-8 1.36-8 4v2h16v-2c0-2.64-5.28-4-8-4z",
            },
          ].map((item) => (
            <motion.a
              key={item.id}
              href="#"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveNav(item.id)}
              className={`group flex items-center px-5 py-3.5 rounded-xl transition-all duration-300 ${
                activeNav === item.id
                  ? "bg-gradient-to-r from-purple-900/70 to-indigo-900/70 shadow-lg shadow-purple-900/20"
                  : "hover:bg-[#1f1f1f] hover:shadow-md hover:shadow-purple-900/10"
              }`}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{
                  rotate: [0, -10, 0],
                  transition: { duration: 0.3 },
                }}
                className="relative mr-3"
              >
                <svg
                  className={`h-6 w-6 transition-colors duration-300 ${
                    activeNav === item.id
                      ? "text-indigo-300"
                      : "text-purple-400 group-hover:text-purple-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={item.icon} />
                </svg>
                {activeNav === item.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-indigo-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
              <span
                className={`font-medium transition-colors duration-300 ${
                  activeNav === item.id ? "text-white" : ""
                }`}
              >
                {item.name}
              </span>
            </motion.a>
          ))}
        </nav>

        {/* Bottom accent */}
        <div className="mt-auto pt-6 border-t border-[#2a2a2a]">
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500/80 via-indigo-500/80 to-blue-500/80 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1.5 }}
          />
        </div>
      </motion.aside>

      {/* Main Content Area with staggered animations */}
      <main className="flex-1 flex flex-col p-10 space-y-8 overflow-hidden">
        {/* Top Bar: Greeting & XP Info with glass effect */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-between backdrop-blur-md bg-[#1a1a1a]/60 rounded-2xl p-6 shadow-lg border border-[#2a2a2a]"
        >
          <motion.h1
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hello, <span className="text-indigo-400">Ash!</span>
          </motion.h1>

          <motion.div
            className="flex space-x-6"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* XP Display with pulse animation */}
            <motion.div
              className="flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-[#252525]/80 border border-[#333333]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <svg
                  className="h-6 w-6 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11 21h-1l1-7H6l7-14h1l-1 7h5l-7 14z" />
                </svg>
                {showXpAnimation && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0.8, 0] }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 rounded-full bg-amber-400"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">XP Points</span>
                <motion.span
                  className="font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  105 XP
                </motion.span>
              </div>
            </motion.div>

            {/* Gem Display with hover effect */}
            <motion.div
              className="flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-[#252525]/80 border border-[#333333]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{
                  rotate: [0, -15, 15, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 2l-2 5 8 13 8-13-2-5H6zm3.38 2h5.24l1.2 3H8.18l1.2-3zM4 9l4 9H4V9zm12 9l4-9v9h-4z" />
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Gems</span>
                <span className="font-semibold">56</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content Section with card animations */}
        <section className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel: Skill Tree / Levels */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1 bg-gradient-to-b from-[#1f1f1f] to-[#191919] rounded-2xl p-8 space-y-7 shadow-xl border border-[#2a2a2a] relative overflow-hidden"
            whileHover={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            {/* Background glow effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-16 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>

            <h2 className="text-2xl font-semibold relative z-10">
              Unlock your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Next Level
              </span>
            </h2>

            <div className="flex items-center gap-6 relative z-10">
              {/* Level indicators with animations */}
              {[
                { level: 1, name: "Initiate", completed: true, icon: null },
                {
                  level: 2,
                  name: "Explorer",
                  completed: false,
                  icon: "M12 .587l3.668 7.431L24 9.75l-6 5.851 1.418 8.264L12 19.771l-7.418 4.094L6 15.601 0 9.75l8.332-1.732L12 .587z",
                },
                {
                  level: 3,
                  name: "Mystery",
                  completed: false,
                  icon: "M20 6H4v12h16V6zM2 4h20v2H2V4z",
                },
              ].map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: level.completed ? 1 : 0.7 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  className="flex flex-col items-center"
                  whileHover={level.completed ? { y: -3 } : {}}
                >
                  <motion.div
                    className={`relative rounded-full w-16 h-16 flex items-center justify-center shadow-lg ${
                      level.completed
                        ? "bg-gradient-to-br from-purple-600 to-indigo-700"
                        : "bg-[#292929]"
                    }`}
                    whileHover={level.completed ? { scale: 1.05 } : {}}
                    whileTap={level.completed ? { scale: 0.95 } : {}}
                  >
                    {level.completed ? (
                      <motion.span
                        className="text-xl font-bold text-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        {level.level}
                      </motion.span>
                    ) : (
                      <svg
                        className="h-8 w-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={level.icon} />
                      </svg>
                    )}

                    {/* Connection line */}
                    {index < 2 && (
                      <motion.div
                        className="absolute -right-6 top-1/2 w-6 h-0.5 bg-gradient-to-r from-gray-500 to-gray-700"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                      />
                    )}
                  </motion.div>

                  <motion.p
                    className={`mt-3 text-sm font-medium ${
                      level.completed ? "text-purple-300" : "text-gray-500"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {level.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Progress track */}
            <motion.div
              className="mt-8 h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                initial={{ width: "0%" }}
                animate={{ width: "33%" }}
                transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>

            {/* Additional progress info */}
            <motion.div
              className="flex justify-between text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span className="text-purple-400">Level 1</span>
              <span className="text-gray-500">1/3 Completed</span>
            </motion.div>
          </motion.div>

          {/* Right Panel: Leaderboard, Quests & CTA */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-4"
          >
            {/* Leaderboard Widget */}
            <motion.div
              className="bg-gradient-to-br from-[#1f1f1f] to-[#191919] rounded-2xl p-6 shadow-lg border border-[#2a2a2a] overflow-hidden relative"
              whileHover={{
                y: -4,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Background accent */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-900/20 rounded-full blur-2xl"></div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2c-1.4 0-2.5 1.1-2.5 2.5S8.6 7 10 7s2.5-1.1 2.5-2.5S11.4 2 10 2zm3.5 7h-7C4.1 9 2 11.1 2 13.5v2.5h16v-2.5c0-2.4-2.1-4.5-4.5-4.5z" />
                  </svg>
                  Leaderboard
                </h3>
                <p className="text-sm mt-1 text-gray-400">
                  Compete to unlock amazing rewards!
                </p>

                {/* Users list */}
                <AnimatePresence>
                  <motion.ul className="mt-4 space-y-2">
                    {[
                      { name: "Alex", xp: 267, rank: 1 },
                      { name: "You", xp: 105, rank: 2, isUser: true },
                      { name: "Taylor", xp: 89, rank: 3 },
                    ].map((user, index) => (
                      <motion.li
                        key={user.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                        className={`flex items-center justify-between p-2 rounded-lg ${
                          user.isUser
                            ? "bg-indigo-900/30 border border-indigo-800/50"
                            : "hover:bg-[#252525] transition-colors"
                        }`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 text-sm ${
                              user.rank === 1
                                ? "bg-amber-400/20 text-amber-400"
                                : user.rank === 2
                                ? "bg-gray-400/20 text-gray-400"
                                : "bg-amber-800/20 text-amber-700"
                            }`}
                          >
                            {user.rank}
                          </span>
                          <span
                            className={
                              user.isUser ? "font-medium text-indigo-300" : ""
                            }
                          >
                            {user.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {user.xp} XP
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Daily Quest */}
            <motion.div
              className="bg-gradient-to-br from-[#1f1f1f] to-[#191919] rounded-2xl p-6 shadow-lg border border-[#2a2a2a]"
              whileHover={{
                y: -4,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                Daily Quest
              </h3>
              <div className="mt-4">
                <motion.div
                  className="flex items-center space-x-3 bg-[#252525]/60 p-3 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6 2L2 9l10 12 10-12-4-7H6zm2 6h8v9H8V8z" />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">Complete 3 levels</p>
                    <p className="text-xs text-gray-400">Reward: 10 XP</p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-sm font-medium text-white shadow-md shadow-purple-900/20"
                whileHover={{
                  scale: 1.02,
                  backgroundImage:
                    "linear-gradient(to right, #9333ea, #6366f1)",
                  boxShadow: "0 8px 15px rgba(120, 79, 226, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                View All Quests
              </motion.button>
            </motion.div>

            {/* Profile CTA */}
            <motion.div
              className="bg-gradient-to-br from-[#1f1f1f] to-[#191919] rounded-2xl p-6 shadow-lg border border-[#2a2a2a] text-center relative overflow-hidden"
              whileHover={{
                y: -4,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10"></div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="relative z-10"
              >
                <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Save Your Progress
                </p>
                <p className="text-sm text-gray-400 mb-4 mt-1">
                  Create your profile for personalized tracking.
                </p>

                <motion.button
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-sm font-medium text-white border border-purple-500/30 shadow-md shadow-purple-900/20"
                  whileHover={{
                    scale: 1.02,
                    backgroundImage:
                      "linear-gradient(to right, #9333ea, #6366f1)",
                    boxShadow: "0 8px 15px rgba(120, 79, 226, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Create Profile
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default LearnPage;
