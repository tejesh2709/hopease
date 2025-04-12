"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CommunitiesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const hobbyCommunities = [
    {
      name: "🎨 Digital Art",
      description: "Sketch, paint or animate — let's get creative!",
      members: 1238,
      activity: "Very Active",
    },
    {
      name: "📚 Bookworms",
      description: "Read. Review. Repeat. Join the reading marathon!",
      members: 956,
      activity: "Active",
    },
    {
      name: "🎸 Music Makers",
      description: "Compose, jam, or remix with fellow musicians.",
      members: 1402,
      activity: "Very Active",
    },
    {
      name: "🧘 Mindful Living",
      description: "Habits, journaling, and peace — we're all about balance.",
      members: 784,
      activity: "Moderate",
    },
    {
      name: "📷 Photography",
      description: "Capture moments and share perspectives.",
      members: 1105,
      activity: "Active",
    },
  ];

  const leaderboard = [
    { name: "Maya", points: 1500, avatar: "M", badge: "🏆" },
    { name: "Arjun", points: 1200, avatar: "A", badge: "🥈" },
    { name: "Zara", points: 950, avatar: "Z", badge: "🥉" },
    { name: "Kai", points: 820, avatar: "K", badge: "⭐" },
    { name: "Leo", points: 780, avatar: "L", badge: "⭐" },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0117] to-[#1a0b2e] text-white p-6 md:p-10">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-indigo-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-violet-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-violet-300">
          🌱 Hobby Communities
        </h1>
        <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
          Connect with like-minded enthusiasts and explore new passions together
        </p>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Journal / Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="relative bg-gradient-to-br from-purple-900/40 to-violet-900/40 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-500/20 overflow-hidden"
            >
              {/* Subtle glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🪪</span>
                </div>

                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-2 text-purple-100">
                    Your Hobby Journal
                  </h2>
                  <p className="text-purple-200">
                    You've been growing in{" "}
                    <span className="font-semibold text-white">
                      Digital Art
                    </span>
                    . You completed 3 beginner challenges and earned your first
                    badge!
                  </p>

                  <div className="flex items-center mt-4 space-x-2">
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center shadow-lg"
                    >
                      <span>🌟</span>
                    </motion.div>
                    <span className="text-sm text-purple-300">
                      Your first achievement badge!
                    </span>
                  </div>

                  <p className="text-sm text-purple-400 mt-4">
                    Keep learning, keep sketching 🎨
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-5 flex justify-end"
              >
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm font-semibold">
                  View Full Journal
                </button>
              </motion.div>
            </motion.div>

            {/* Communities */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {hobbyCommunities.map((hobby, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative bg-gradient-to-br from-purple-900/30 to-indigo-900/20 rounded-xl p-5 backdrop-blur-sm border border-purple-500/10 overflow-hidden group"
                >
                  {/* Background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-indigo-600/5"
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-200 transition-colors">
                    {hobby.name}
                  </h3>
                  <p className="text-purple-300 mb-4">{hobby.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full">
                        {hobby.members.toLocaleString()} members
                      </div>
                      <div className="text-xs text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full">
                        {hobby.activity}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2.5 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    Join Community
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar with Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-900/40 to-violet-900/30 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-500/20"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-2">🏅</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                Community Leaderboard
              </span>
            </h2>

            <div className="space-y-2">
              {leaderboard.map((user, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-purple-900/20 border border-purple-500/10"
                >
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold">
                        {user.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center text-xs">
                        {user.badge}
                      </div>
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="text-purple-300 font-semibold">
                    {user.points.toLocaleString()} pts
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Your Rank */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
              <div className="text-sm text-purple-300 mb-2">Your Rank</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold mr-2 text-sm">
                    N
                  </div>
                  <span className="font-medium">You (Nischa)</span>
                </div>
                <div className="text-purple-300 font-semibold">720 pts</div>
              </div>
              <div className="mt-3 h-2 w-full bg-purple-900/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </div>
              <div className="mt-1 text-xs text-purple-400 text-right">
                280 pts until next rank
              </div>
            </div>

            {/* Call To Action */}
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Discover More Communities
              </button>
            </motion.div>

            {/* Featured Event */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-purple-800/30 to-violet-800/30 border border-purple-500/20">
              <div className="text-sm text-purple-300 mb-1">Featured Event</div>
              <h3 className="font-bold text-white mb-2">
                Digital Art Workshop
              </h3>
              <p className="text-sm text-purple-300 mb-3">
                Join us this Saturday for a live digital painting session with
                professional artists!
              </p>
              <div className="flex justify-between text-xs text-purple-400">
                <span>Apr 15, 2025</span>
                <span>114 attending</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}