"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";

const HobbyDiscoveryPage: NextPage = () => {
  // State for hover effects and animations
  const [activeNav, setActiveNav] = useState("explore");
  const [showXpAnimation, setShowXpAnimation] = useState(false);
  const [currentHobby, setCurrentHobby] = useState<HobbyKey>("photography");

  // Hobby data types
  type HobbyKey =
    | "photography"
    | "cooking"
    | "painting"
    | "coding"
    | "hiking"
    | "gaming";

  type Hobby = {
    name: string;
    icon: string;
    description: string;
    level: number;
    totalLevels: number;
    progress: number;
    streak: number;
    recommended?: boolean;
  };

  const hobbies: Record<HobbyKey, Hobby> = {
    photography: {
      name: "Photography",
      icon: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
      description: "Capture moments and express your creativity through a lens",
      level: 2,
      totalLevels: 5,
      progress: 45,
      streak: 7,
      recommended: true,
    },
    cooking: {
      name: "Cooking",
      icon: "M11 19v-14h-1v-1h4v1h-1v14h4v1h-10v-1h4zm-6 0h-2v-12c0-.552.448-1 1-1s1 .448 1 1v12zm-2-14c0-1.105.895-2 2-2s2 .895 2 2h-4z",
      description: "Discover new flavors and create delicious meals",
      level: 1,
      totalLevels: 5,
      progress: 20,
      streak: 3,
      recommended: true,
    },
    painting: {
      name: "Painting",
      icon: "M19.293 5.293L16.707 2.707C16.316 2.316 15.789 2.086 15.222 2.029C14.676 1.975 14.125 2.098 13.657 2.379C13.189 2.659 12.824 3.084 12.615 3.584C12.406 4.096 12.357 4.661 12.464 5.201C12.516 5.458 12.614 5.7 12.747 5.925L2 16.672V22H7.328L18.075 11.253C18.3 11.386 18.542 11.484 18.799 11.537C19.339 11.643 19.904 11.594 20.417 11.384C20.916 11.176 21.341 10.811 21.621 10.343C21.902 9.874 22.025 9.324 21.971 8.778C21.914 8.211 21.684 7.684 21.293 7.293L19.293 5.293ZM7.671 16.5L16.5 7.671C16.5 7.671 16.5 7.671 16.5 7.671C16.709 7.463 16.958 7.305 17.231 7.207C17.504 7.109 17.794 7.073 18.082 7.102C18.358 7.13 18.624 7.22 18.862 7.364L15.636 10.59C15.538 10.687 15.471 10.809 15.44 10.942C15.41 11.075 15.419 11.214 15.464 11.342C15.509 11.469 15.59 11.581 15.697 11.664C15.803 11.747 15.931 11.798 16.066 11.812C16.186 11.825 16.308 11.809 16.42 11.766C16.532 11.723 16.633 11.654 16.714 11.566L19.95 8.33C20.094 8.568 20.184 8.834 20.212 9.11C20.241 9.399 20.205 9.69 20.107 9.962C20.009 10.234 19.851 10.483 19.643 10.692C19.434 10.901 19.185 11.059 18.913 11.157C18.64 11.255 18.35 11.291 18.061 11.262C17.773 11.233 17.494 11.139 17.247 10.989C17 10.838 16.792 10.635 16.636 10.394C16.48 10.153 16.38 9.881 16.343 9.595L7.328 18.61L5.39 20.55H3.45V18.61L5.39 16.672L7.671 16.5ZM18.5 7.672C18.5 7.672 18.5 7.672 18.5 7.671L18.5 7.672Z",
      description: "Express yourself through colors and brushstrokes",
      level: 0,
      totalLevels: 5,
      progress: 0,
      streak: 0,
      recommended: true,
    },
    coding: {
      name: "Coding",
      icon: "M10 20L14 4H12L8 20H10ZM5.236 17L7 15.236L8.414 16.65L5.764 19.3C5.57 19.493 5.308 19.602 5.036 19.602C4.764 19.602 4.502 19.493 4.308 19.3L1.708 16.7C1.515 16.506 1.406 16.244 1.406 15.972C1.406 15.7 1.515 15.438 1.708 15.244L4.358 12.594L5.772 14.008L4.008 15.772L5.236 17ZM19.692 7.756L17.042 10.406L15.628 8.992L17.392 7.228L16.164 6L14.4 7.764L12.986 6.35L15.636 3.7C15.829 3.507 16.091 3.398 16.363 3.398C16.635 3.398 16.897 3.507 17.091 3.7L19.691 6.3C19.884 6.494 19.993 6.756 19.993 7.028C19.993 7.3 19.884 7.562 19.691 7.756H19.692Z",
      description: "Build apps, websites, and solve problems with code",
      level: 1,
      totalLevels: 5,
      progress: 15,
      streak: 2,
    },
    hiking: {
      name: "Hiking",
      icon: "M13.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.4,5.5,13.5,5.5z M17.5,10.78c-1.23-0.37-2.22-1.17-2.8-2.18l-1-1.6 c-0.41-0.65-1.11-1-1.84-1c-0.78,0-1.59,0.5-1.78,1.44S7,23,7,23h2.1l1.8-8l2.1,2v6h2v-7.5l-2.1-2l0.6-3c1,1.15,2.41,2.01,4,2.34V23 H19V9h-1.5L17.5,10.78z M7.43,13.13l-2.12-0.41c-0.54-0.11-0.9-0.63-0.79-1.17l0.76-3.93c0.21-1.08,1.26-1.79,2.34-1.58l1.16,0.23 L7.43,13.13z",
      description: "Explore the outdoors and connect with nature",
      level: 0,
      totalLevels: 5,
      progress: 0,
      streak: 0,
    },
    gaming: {
      name: "Gaming",
      icon: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
      description: "Immerse yourself in virtual worlds and challenges",
      level: 3,
      totalLevels: 5,
      progress: 70,
      streak: 12,
    },
  };

  // Simulating page load
  useEffect(() => {
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
            Hobby
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
            Horizon
          </span>
        </motion.div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          {[
            {
              id: "explore",
              name: "Explore",
              icon: "M10 3.5a6.5 6.5 0 0 0-5.478 10.025l-1.23 2.58a.75.75 0 0 0-.037.696l.67 1.341a.75.75 0 0 0 1.342 0l.67-1.342a.75.75 0 0 0-.038-.696l-1.23-2.58A6.5 6.5 0 1 0 10 3.5Z",
            },
            {
              id: "myhobbies",
              name: "My Hobbies",
              icon: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z",
            },
            {
              id: "community",
              name: "Community",
              icon: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
            },
            {
              id: "journal",
              name: "My Journal",
              icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
            },
            {
              id: "profile",
              name: "Profile",
              icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
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

        {/* Current Streak */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-auto pt-6 border-t border-[#2a2a2a]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Current Streak</span>
            <span className="font-medium text-amber-400">7 days</span>
          </div>
          <div className="flex justify-between">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className={`h-2 w-2 rounded-full ${
                  i < 5 ? "bg-amber-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom accent */}
        <div className="pt-4">
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500/80 via-indigo-500/80 to-blue-500/80 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1.5 }}
          />
        </div>
      </motion.aside>

      {/* Main Content Area with staggered animations */}
      <main className="flex-1 flex flex-col p-10 space-y-8 overflow-y-auto">
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
            Hello, <span className="text-indigo-400">Nischa!</span>
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
                  235 XP
                </motion.span>
              </div>
            </motion.div>

            {/* Gems Display with hover effect */}
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
                <span className="font-semibold">42</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hobby Learning Path Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Learning Path
              </span>
            </h2>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Current Hobby:</span>
              <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                <select
                  value={currentHobby}
                  onChange={(e) => setCurrentHobby(e.target.value as HobbyKey)}
                  className="appearance-none bg-[#252525] border border-[#3a3a3a] rounded-lg py-1.5 pl-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {Object.entries(hobbies).map(([id, hobby]) => (
                    <option key={id} value={id}>
                      {hobby.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hobby Level Path */}
          <motion.div
            className="bg-gradient-to-b from-[#1f1f1f] to-[#191919] rounded-2xl shadow-xl border border-[#2a2a2a]"
            whileHover={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            <div className="p-8 relative overflow-hidden">
              {/* Background glow effects */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-900/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-16 w-60 h-60 bg-purple-900/10 rounded-full blur-3xl"></div>

              {/* Hobby header info */}
              <div className="flex items-start mb-8">
                <motion.div
                  className="p-3 rounded-xl bg-indigo-900/20 mr-4"
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <svg
                    className="h-8 w-8 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={hobbies[currentHobby].icon} />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {hobbies[currentHobby].name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {hobbies[currentHobby].description}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center mr-4">
                      <svg
                        className="h-4 w-4 mr-1 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                      <span className="text-xs text-gray-300">
                        Level {hobbies[currentHobby].level + 1}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-1 text-red-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-gray-300">
                        {hobbies[currentHobby].streak} day streak
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level progression path visualization */}
              <div className="relative mb-8">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-[#2a2a2a]"></div>

                {/* Level steps */}
                <div className="flex justify-between relative">
                  {Array.from({ length: 5 }, (_, index) => {
                    const isCompleted = index <= hobbies[currentHobby].level;
                    const isCurrent = index === hobbies[currentHobby].level;

                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex flex-col items-center relative"
                        whileHover={isCompleted || isCurrent ? { y: -4 } : {}}
                      >
                        <motion.div
                          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg
                            ${
                              isCurrent
                                ? "bg-gradient-to-br from-purple-600 to-indigo-700 shadow-purple-900/30"
                                : isCompleted
                                ? "bg-indigo-600"
                                : "bg-[#292929]"
                            }`}
                          whileHover={
                            isCompleted || isCurrent ? { scale: 1.05 } : {}
                          }
                          whileTap={
                            isCompleted || isCurrent ? { scale: 0.95 } : {}
                          }
                        >
                          {isCompleted ? (
                            <svg
                              className="h-6 w-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : isCurrent ? (
                            <span className="text-xl font-bold text-white">
                              {index + 1}
                            </span>
                          ) : (
                            <span className="text-xl font-bold text-gray-500">
                              {index + 1}
                            </span>
                          )}

                          {/* Show pulse animation on current level */}
                          {isCurrent && (
                            <motion.div
                              className="absolute inset-0 rounded-full bg-purple-600"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 0.2, 0],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </motion.div>

                        <motion.div
                          className={`mt-3 text-center ${
                            isCurrent
                              ? "text-purple-300 font-medium"
                              : isCompleted
                              ? "text-gray-300"
                              : "text-gray-500"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <div className="text-sm font-medium">
                            Level {index + 1}
                          </div>
                          <div className="text-xs mt-0.5">
                            {index === 0
                              ? "Basics"
                              : index === 1
                              ? "Fundamentals"
                              : index === 2
                              ? "Intermediate"
                              : index === 3
                              ? "Advanced"
                              : "Mastery"}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Current level progress */}
              {hobbies[currentHobby].level < 4 && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-purple-400 font-medium">
                      Level {hobbies[currentHobby].level + 1} Progress
                    </span>
                    <span>{hobbies[currentHobby].progress}%</span>
                  </div>
                  <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${hobbies[currentHobby].progress}%` }}
                      transition={{
                        delay: 1.3,
                        duration: 1.2,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Action buttons */}
              <div className="flex mt-8 space-x-4">
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "#6d28d9" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 py-3 rounded-xl bg-purple-600 font-medium text-white shadow-lg shadow-purple-900/20"
                >
                  Continue Learning
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "#312e81" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-3 rounded-xl bg-indigo-800 font-medium text-white shadow-lg"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Recommendations & More */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel: Recommended Hobbies */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex-1 bg-gradient-to-b from-[#1f1f1f] to-[#191919] rounded-2xl p-8 shadow-xl border border-[#2a2a2a] relative overflow-hidden"
            whileHover={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            {/* Background glow effect */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-900/10 rounded-full blur-3xl"></div>

            <h2 className="text-xl font-semibold mb-5 relative z-10">
              Recommended{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Hobbies
              </span>
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Object.entries(hobbies)
                .filter(([, hobby]) => hobby.recommended)
                .map(([id, hobby], index) => (
                  <motion.div
                    key={id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px -5px rgba(91, 33, 182, 0.15)",
                      backgroundColor: "rgba(40, 40, 40, 0.6)",
                    }}
                    className="p-4 bg-[#252525]/40 rounded-xl border border-[#333333] flex items-center gap-4 cursor-pointer"
                    onClick={() => setCurrentHobby(id as HobbyKey)}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        id === currentHobby
                          ? "bg-purple-900/30"
                          : "bg-gray-800/80"
                      }`}
                    >
                      <svg
                        className={`h-6 w-6 ${
                          id === currentHobby
                            ? "text-purple-400"
                            : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={hobby.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{hobby.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Level {hobby.level + 1}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundImage: "linear-gradient(to right, #9333ea, #6366f1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600/80 to-indigo-600/80 font-medium text-white shadow-md relative z-10"
            >
              Explore More Hobbies
            </motion.button>
          </motion.div>

          {/* Right Panel: Additional Info */}
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
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Leaderboard
                </h3>

                {/* Users list */}
                <AnimatePresence>
                  <motion.ul className="mt-4 space-y-2">
                    {/*
                      Fixed key prop warning by using user.rank
                      and removed unnecessary fragment
                    */}
                    {[
                      { name: "Aiden", xp: 428, rank: 1 },
                      { name: "Sarah", xp: 342, rank: 2 },
                      { name: "You", xp: 235, rank: 3, isUser: true },
                      { name: "Miguel", xp: 197, rank: 4 },
                    ].map((user, index) => (
                      <motion.li
                        key={user.rank}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
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
                                : user.rank === 3
                                ? "bg-amber-800/20 text-amber-700"
                                : "bg-gray-700/20 text-gray-500"
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

            {/* Daily Challenge */}
            <motion.div
              className="bg-gradient-to-br from-[#1f1f1f] to-[#191919] rounded-2xl p-6 shadow-lg border border-[#2a2a2a]"
              whileHover={{
                y: -4,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              // Fixed duplicate transition props
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
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
                Daily Challenge
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
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">
                      Practice {hobbies[currentHobby].name} for 15 minutes
                    </p>
                    <p className="text-xs text-gray-400">
                      Reward: 15 XP + 2 Gems
                    </p>
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
                Complete Challenge
              </motion.button>
            </motion.div>

            {/* Community Widget */}
            <motion.div
              className="bg-gradient-to-br from-[#1f1f1f] to-[#191919] rounded-2xl p-6 shadow-lg border border-[#2a2a2a] text-center relative overflow-hidden"
              whileHover={{
                y: -4,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              // Fixed duplicate transition props
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10"></div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="relative z-10"
              >
                <div className="flex -space-x-2 justify-center mb-3">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                      className="w-8 h-8 rounded-full border-2 border-[#1f1f1f] bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-xs font-bold"
                    >
                      {["A", "M", "S", "J"][i]}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.9 }}
                    className="w-8 h-8 rounded-full border-2 border-[#1f1f1f] bg-[#2a2a2a] flex items-center justify-center text-xs"
                  >
                    +8
                  </motion.div>
                </div>

                <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Join the Community
                </p>
                <p className="text-sm text-gray-400 mb-4 mt-1">
                  Connect with {hobbies[currentHobby].name.toLowerCase()}{" "}
                  enthusiasts
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
                  Join Community
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HobbyDiscoveryPage;
