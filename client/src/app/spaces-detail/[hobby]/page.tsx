"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function CommunityPage() {
  const { hobby } = useParams();
  const [mounted, setMounted] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Sample chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      user: "PixelPerfect",
      avatar: "P",
      text: "Just finished my cyberpunk piece! Any feedback?",
      time: "2 min ago",
    },
    {
      id: 2,
      user: "BrushMaster",
      avatar: "B",
      text: "I love the neon colors you used. The composition is great too!",
      time: "1 min ago",
    },
    {
      id: 3,
      user: "NeonDreamer",
      avatar: "N",
      text: "How did you create that glowing effect?",
      time: "Just now",
    },
  ]);

  // Format the hobby name for display
  const formatHobbyName = (name) => {
    if (!name) return "";
    return name
      .toString()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    setMounted(true);
    // Scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  if (!mounted) return null;

  const formattedHobby = formatHobbyName(hobby);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      id: chatMessages.length + 1,
      user: "You",
      avatar: "Y",
      text: message,
      time: "Just now",
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f5f5f7] py-10 px-6 md:px-16 font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="h-14 w-14 rounded-xl bg-[#181818] border border-[#2a2a2a] flex items-center justify-center text-2xl shadow-lg">
                {formattedHobby === "Digital Art"
                  ? "🎨"
                  : formattedHobby === "Photography"
                  ? "📷"
                  : formattedHobby === "Culinary Arts"
                  ? "🍳"
                  : "✨"}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold">{formattedHobby}</h1>
                  <span className="px-2.5 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-800/30">
                    Official
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    320 online
                  </span>
                  <span>•</span>
                  <span>12.4k members</span>
                  <span>•</span>
                  <span>Very Active</span>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-gray-400 text-lg max-w-3xl"
            >
              Welcome to the space where artists, sketchers, and doodlers unite!
              Share your creations, take on challenges, and grow your creativity
              with others.
            </motion.p>
          </div>

          {/* Current Challenge Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-medium flex items-center gap-2">
              <span className="text-purple-400">▸</span> Weekly Challenge
            </h2>

            <motion.div
              whileHover={{ scale: 1.01, backgroundColor: "#161616" }}
              transition={{ duration: 0.2 }}
              className="bg-[#141414] p-6 rounded-xl shadow-md border border-[#252525] flex flex-col md:flex-row md:items-center gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-purple-500/10 text-[120px] font-bold -rotate-12 -mt-8 -mr-8 pointer-events-none">
                🎨
              </div>

              <div className="md:flex-1 z-10">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <span className="text-purple-400 mr-2">🔥</span> Cyberpunk
                  Dreams
                </h3>
                <p className="text-gray-300">
                  Create artwork inspired by cyberpunk aesthetics – neon lights,
                  futuristic cityscapes, or high-tech low-life scenarios. Show
                  us your vision of tomorrow!
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <div className="px-3 py-1 bg-[#1a1a1a] rounded-full text-xs text-gray-300 border border-[#2a2a2a]">
                    Ends in 3 days
                  </div>
                  <div className="px-3 py-1 bg-[#1a1a1a] rounded-full text-xs text-gray-300 border border-[#2a2a2a]">
                    <span className="text-purple-400 mr-1">+200</span> XP
                  </div>
                  <div className="px-3 py-1 bg-[#1a1a1a] rounded-full text-xs text-gray-300 border border-[#2a2a2a]">
                    42 submissions
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#222] text-sm font-medium rounded-lg text-white border border-purple-900/20 whitespace-nowrap"
              >
                View Challenge
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Community Chat Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-medium flex items-center gap-2">
              <span className="text-purple-400">▸</span> Community Chat
            </h2>

            <div className="bg-[#141414] rounded-xl shadow-md border border-[#252525] overflow-hidden flex flex-col">
              {/* Chat header */}
              <div className="px-5 py-4 border-b border-[#252525] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-medium">Live Chat</span>
                </div>
                <span className="text-xs text-gray-400">
                  {chatMessages.length} messages today
                </span>
              </div>

              {/* Chat messages area */}
              <div className="p-5 flex-1 h-80 overflow-y-auto space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="flex items-start gap-3">
                    <div
                      className={`h-8 w-8 rounded-full ${
                        msg.user === "You" ? "bg-purple-900/40" : "bg-[#252525]"
                      } border border-[#333] flex-shrink-0 flex items-center justify-center`}
                    >
                      <span className="text-sm">{msg.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium">{msg.user}</span>
                        <span className="text-xs text-gray-500">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-gray-300 mt-1">{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input area */}
              <div className="p-4 border-t border-[#252525] bg-[#161616]">
                <div className="flex gap-3 items-center">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="Type your message..."
                      className="w-full py-2.5 px-4 bg-[#1a1a1a] border border-[#333] rounded-lg focus:outline-none focus:border-purple-600/50 text-sm"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    className="px-4 py-2.5 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <span>Send</span>
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-80 lg:min-w-[320px] space-y-4"
        >
          {/* Community Card */}
          <div className="bg-[#151515] rounded-xl p-6 shadow-lg border border-[#252525]">
            <h2 className="text-xl font-semibold mb-2">About This Community</h2>
            <p className="text-gray-400 mb-5">
              A place to share, learn, and grow your creative skills with fellow
              hobbyists.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Created</span>
                <span className="font-medium">March 1, 2024</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Members</span>
                <span className="font-medium">12,432</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Online</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="font-medium">320</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Activity</span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-1 h-4 rounded-sm mx-0.5 ${
                        i <= 4 ? "bg-purple-500/70" : "bg-[#252525]"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Level Rank</span>
                <span className="font-medium flex items-center">
                  <span className="text-purple-400 mr-1.5">★</span> 4
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsJoined(!isJoined)}
              className={`w-full py-2.5 rounded-lg font-medium transition-all ${
                isJoined
                  ? "bg-[#1a1a1a] hover:bg-[#1f1f1f] border border-purple-900/30 text-white"
                  : "bg-purple-600 hover:bg-purple-500 text-white"
              }`}
            >
              {isJoined ? "Joined" : "Join Community"}
            </motion.button>
          </div>

          {/* Active Members Card */}
          <div className="bg-[#151515] rounded-xl p-6 shadow-lg border border-[#252525]">
            <h3 className="text-lg font-medium mb-4">Online Now</h3>

            <div className="space-y-4 mb-4">
              {[
                { name: "ArtistProdigy", status: "Drawing live", avatar: "A" },
                { name: "CreativeMind", status: "In chat", avatar: "C" },
                {
                  name: "SketchMaster",
                  status: "Viewing challenge",
                  avatar: "S",
                },
              ].map((member, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-8 w-8 rounded-full bg-[#252525] border border-[#333] flex items-center justify-center">
                      <span className="text-sm">{member.avatar}</span>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border border-[#151515]"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{member.name}</div>
                    <div className="text-xs text-gray-400">{member.status}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#252525] mt-5 pt-5 space-y-3">
              <h3 className="text-sm font-medium">Quick Links</h3>

              <div className="space-y-2">
                {[
                  { name: "Learning Resources", icon: "📚" },
                  { name: "Community Rules", icon: "📜" },
                ].map((link, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 2 }}
                    className="w-full flex items-center gap-2 py-1.5 px-3 rounded-lg bg-[#1a1a1a] hover:bg-[#202020] text-left text-sm transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
