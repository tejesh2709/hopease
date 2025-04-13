"use client";
import { useState } from "react";
import { Sidebar } from "@/components/index";
import { motion } from "framer-motion";

export default function EnhancedProfile() {
  const [activeTab, setActiveTab] = useState("following");

  return (
    <div className="min-h-screen w-full flex bg-[#0d0d0d] text-[#f5f5f7]">
      <Sidebar />

      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Top section: banner + profile info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Banner with gradient overlay */}
            <div className="h-48 md:h-56 w-full rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/40"></div>
              <div className="absolute inset-0 bg-[#111] opacity-70"></div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 bg-[#1a1a1a] hover:bg-[#222] text-white p-2 rounded-full border border-gray-700 z-10"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </motion.button>
            </div>

            {/* Profile Avatar */}
            <div className="absolute bottom-[-40px] left-6 md:left-10">
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#0d0d0d] overflow-hidden bg-[#151515]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="Profile Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-500 p-1.5 rounded-full border-2 border-[#0d0d0d]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Profile info and social area */}
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-start gap-8">
            {/* Left: Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">Nischa1M</h2>
                  <p className="text-gray-400 text-sm">@Nischa1M</p>
                </div>

                <div className="flex gap-4 items-center text-sm">
                  <span className="text-gray-300">Joined April 2025</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <div className="flex items-center gap-1 text-purple-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>India</span>
                  </div>
                </div>

                <div className="flex gap-6 text-sm">
                  <button className="flex items-center gap-1 text-gray-300 hover:text-white">
                    <span className="font-medium">0</span> Following
                  </button>
                  <button className="flex items-center gap-1 text-gray-300 hover:text-white">
                    <span className="font-medium">0</span> Followers
                  </button>
                </div>

                <div className="flex gap-3 pt-2">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1 px-3 py-1 bg-[#151515] rounded-full text-sm"
                  >
                    <span className="text-amber-500">🔥</span>
                    <span>0 day streak</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1 px-3 py-1 bg-[#151515] rounded-full text-sm"
                  >
                    <span className="text-purple-400">⚡</span>
                    <span>0 XP</span>
                  </motion.div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-2">
                <h3 className="text-lg font-medium mb-3">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 bg-[#141414] rounded-xl border border-[#252525] text-left hover:border-purple-900/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center text-purple-400">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Find Friends</div>
                      <div className="text-xs text-gray-400">
                        Connect with others
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 bg-[#141414] rounded-xl border border-[#252525] text-left hover:border-purple-900/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center text-purple-400">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Invite Friends</div>
                      <div className="text-xs text-gray-400">
                        Share via email or link
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 bg-[#141414] rounded-xl border border-[#252525] text-left hover:border-purple-900/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center text-purple-400">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Settings</div>
                      <div className="text-xs text-gray-400">
                        Account preferences
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 bg-[#141414] rounded-xl border border-[#252525] text-left hover:border-purple-900/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center text-purple-400">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Edit Profile</div>
                      <div className="text-xs text-gray-400">
                        Update your information
                      </div>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right: Connections Panel */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-72 md:min-w-[320px]"
            >
              <div className="bg-[#151515] rounded-xl p-6 border border-[#252525] shadow-lg">
                {/* Header */}
                <h2 className="text-lg font-medium mb-4">Connections</h2>

                {/* Tabs */}
                <div className="flex border-b border-[#252525] mb-5">
                  <button
                    onClick={() => setActiveTab("following")}
                    className={`flex-1 text-sm py-2.5 font-medium ${
                      activeTab === "following"
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-gray-400"
                    }`}
                  >
                    FOLLOWING
                  </button>
                  <button
                    onClick={() => setActiveTab("followers")}
                    className={`flex-1 text-sm py-2.5 font-medium ${
                      activeTab === "followers"
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-gray-400"
                    }`}
                  >
                    FOLLOWERS
                  </button>
                </div>

                {/* Empty state with illustration */}
                <div className="text-center py-4">
                  <div className="bg-[#1a1a1a] rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="52"
                      height="52"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="text-purple-400/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">
                    Connect with others to enhance your learning journey
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5">
                    Find people with similar interests and goals
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#252525]">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 text-sm font-medium bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                  >
                    Discover People
                  </motion.button>
                </div>
              </div>

              {/* Achievements preview */}
              <div className="mt-4 bg-[#151515] rounded-xl p-6 border border-[#252525] shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Achievements</h3>
                  <button className="text-xs text-purple-400">VIEW ALL</button>
                </div>

                <div className="flex justify-center items-center py-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#252525] flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Start learning to earn achievements
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
