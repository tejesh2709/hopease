"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sidebar } from "@/components/index";
import { useRouter } from "next/navigation";

export default function CommunitiesPage() {
  const router = useRouter();
  const [selectedCommunity, setSelectedCommunity] = useState<number | null>(
    null
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const hobbyCommunities = [
    {
      name: "Digital Art",
      icon: "🎨",
      description: "Sketch, paint or animate — let's get creative!",
      members: 1238,
      activity: "Very Active",
    },
    {
      name: "Bookworms",
      icon: "📚",
      description: "Read. Review. Repeat. Join the reading marathon!",
      members: 956,
      activity: "Active",
    },
    {
      name: "Music Makers",
      icon: "🎸",
      description: "Compose, jam, or remix with fellow musicians.",
      members: 1402,
      activity: "Very Active",
    },
    {
      name: "Mindful Living",
      icon: "🧘",
      description: "Habits, journaling, and peace — we're all about balance.",
      members: 784,
      activity: "Moderate",
    },
    {
      name: "Photography",
      icon: "📷",
      description: "Capture moments and share perspectives.",
      members: 1105,
      activity: "Active",
    },
    {
      name: "Culinary Arts",
      icon: "🍳",
      description: "Cook, bake, and explore flavors from around the world.",
      members: 921,
      activity: "Active",
    },
  ];

  // Function to format hobby name for URL
  const formatForUrl = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  // Subtle fade-up animation for elements
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Stagger effect for card entrance
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0d0d0d] text-[#f5f5f7]">
      <Sidebar />
      <div className="flex-1 py-10 px-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header with minimal purple accent */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <h1 className="text-3xl font-light tracking-tight mb-1.5">
                Explore <span className="font-medium">Communities</span>
              </h1>
              <p className="text-gray-500 text-sm">
                Connect with enthusiasts and discover new passions
              </p>
            </motion.div>

            {/* Your Journal Summary - Minimal Card with subtle purple */}
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 bg-[#161616] px-4 py-2.5 rounded-lg shadow-sm"
            >
              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
                <span className="text-sm">N</span>
              </div>
              <div>
                <p className="text-sm font-medium flex items-center gap-2">
                  Hobby Journal
                  <motion.span
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="inline-block w-2 h-2 rounded-full bg-purple-500/70"
                  ></motion.span>
                </p>
                <p className="text-xs text-gray-500">Level 3 • Digital Art</p>
              </div>
            </motion.div>
          </div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["All", "For You", "Popular", "New", "Creative", "Active"].map(
              (filter, index) => (
                <motion.button
                  key={filter}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                    index === 0
                      ? "bg-[#1c1c1c] text-white"
                      : "bg-transparent text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {filter}
                </motion.button>
              )
            )}
          </motion.div>

          {/* Featured Event - Simple Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.005 }}
            className="relative bg-gradient-to-r from-[#161616] to-[#131313] rounded-xl p-5 mb-10 overflow-hidden group border border-[#232323]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#0c0c0c] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Featured Event • April 15
                </div>
                <h3 className="text-xl font-medium mb-2">
                  Digital Art Workshop
                </h3>
                <p className="text-sm text-gray-400 max-w-2xl">
                  Join our Saturday live session with professional artists where
                  you&apos;ll learn advanced techniques for digital
                  illustration.
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-4 py-2 bg-[#1d1d1d] hover:bg-[#252525] rounded-lg text-sm font-medium transition-colors border border-purple-900/20"
                  >
                    Learn More
                  </motion.button>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500/70"
                    ></motion.span>
                    114 attending
                  </div>
                </div>
              </div>

              <div className="h-16 w-16 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                <span className="text-2xl">🖌️</span>
              </div>
            </div>
          </motion.div>

          {/* Communities Grid - Clean, Minimal Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hobbyCommunities.map((hobby, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  setSelectedCommunity(
                    selectedCommunity === index ? null : index
                  )
                }
                className={`relative bg-[#151515] border border-[#232323] rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedCommunity === index
                    ? "ring-1 ring-purple-900/30"
                    : hoveredCard === index
                    ? "bg-[#171717]"
                    : ""
                }`}
              >
                {/* Subtle indicator dot - only purple element */}
                {selectedCommunity === index && (
                  <motion.div
                    layoutId="selected-dot"
                    className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-purple-500/70"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                )}

                <div className="mb-4">
                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="inline-block text-2xl mb-2"
                  >
                    {hobby.icon}
                  </motion.div>
                  <h3 className="text-lg font-medium">{hobby.name}</h3>
                  <p className="text-sm text-gray-400 mt-1 min-h-[40px]">
                    {hobby.description}
                  </p>
                </div>

                <div className="flex items-center text-xs text-gray-500 space-x-3 mb-5">
                  <span>{hobby.members.toLocaleString()} members</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                  <span>{hobby.activity}</span>
                </div>

                <AnimatePresence>
                  {selectedCommunity === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="py-3 border-t border-[#232323] mb-4">
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                          <span>Current Challenges</span>
                          <span>2 active</span>
                        </div>
                        <div className="text-sm">
                          Weekly sketch prompt: &ldquo;Motion&rdquo;
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card selection
                    if (selectedCommunity === index) {
                      // Navigate to spaces-detail page
                      const hobbyName = formatForUrl(hobby.name);
                      router.push(`/spaces-detail/${hobbyName}`);
                    } else {
                      setSelectedCommunity(index);
                    }
                  }}
                  className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCommunity === index
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-[#1d1d1d] hover:bg-[#252525]"
                  }`}
                >
                  {selectedCommunity === index
                    ? "Join Community"
                    : "View Details"}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Discover More Communities Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <motion.button
              whileHover={{
                y: -1,
                boxShadow: "0 0 10px rgba(139, 92, 246, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#181818] rounded-lg text-sm flex items-center gap-2 transition-all border border-purple-900/10"
            >
              <span>Discover More Communities</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
