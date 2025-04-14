"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";

export default function CommunityPage() {
  const { hobby } = useParams();
  const [mounted, setMounted] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get(
          "http://localhost:5000/communities/67faf4bb74a7137aa5892ad5/messages"
        );
        setMessages(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }

    fetchMessages();
  }, []);

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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!mounted) return null;

  const formattedHobby = formatHobbyName(hobby);

  const handleSendMessage = async () => {
    if (content.trim() === "") return;

    try {
      await axios.post(
        "http://localhost:5000/communities/67faf4bb74a7137aa5892ad5/messages",
        {
          userId: "You",
          content,
        }
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { userId: "You", content, time: "Just now", avatar: "👤" },
      ]);
      setContent("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f5f5f7] py-10 px-6 md:px-16 font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Header */}
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

            <div className="bg-[#141414] rounded-xl shadow-md border border-[#252525] flex flex-col h-[500px]">
              {/* Chat Header */}
              <div className="px-5 py-4 border-b border-[#252525] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-medium">Live Chat</span>
                </div>
                <span className="text-xs text-gray-400">
                  {messages.length} messages today
                </span>
              </div>

              {/* Chat Messages */}
              <div className="p-5 space-y-4 overflow-y-auto scrollbar-none flex-1">
                {messages.map((msg, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`h-8 w-8 rounded-full ${
                        msg.user === "You" ? "bg-purple-900/40" : "bg-[#252525]"
                      } border border-[#333] flex-shrink-0 flex items-center justify-center`}
                    >
                      <span className="text-sm">{msg.avatar || "👤"}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium">{msg.userId}</span>
                        <span className="text-xs text-gray-500">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-gray-300 mt-1">{msg.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-[#252525] bg-[#161616]">
                <div className="flex gap-3 items-center">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      onKeyDown={(e) =>
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
          <div className="bg-[#151515] rounded-xl p-6 shadow-lg border border-[#252525]">
            <h2 className="text-xl font-semibold mb-2">About This Community</h2>
            <p className="text-gray-400 mb-5">
              {formattedHobby} enthusiasts come together here to learn, share,
              and grow in a creative environment. Join us to be a part of this
              active community!
            </p>
            <button
              onClick={() => setIsJoined(!isJoined)}
              className={`w-full py-2 rounded-lg text-white ${
                isJoined ? "bg-purple-600" : "bg-green-500"
              }`}
            >
              {isJoined ? "Leave Community" : "Join Community"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
