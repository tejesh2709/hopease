'use client';
import React from 'react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold">🎨 Digital Art Community</h1>
          <p className="text-gray-400">
            Welcome to the space where artists, sketchers, and doodlers unite! 
            Share your creations, take on challenges, and grow your creativity with others.
          </p>

          {/* Placeholder for future content */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 transition hover:scale-[1.01]">
            <h2 className="text-xl font-semibold mb-2">🔥 Current Challenge</h2>
            <p className="text-gray-300">
              This week's theme: "Cyberpunk Dreams". Submit your artwork and earn XP!
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-gray-800 w-full lg:w-80 rounded-2xl p-6 shadow-lg h-fit sticky top-20">
          <h2 className="text-2xl font-semibold mb-2">🎯 Digital Art</h2>
          <p className="text-gray-400 mb-4">
            A place to share, learn, and grow your creative skills with fellow hobbyists.
          </p>

          <div className="text-sm text-gray-300 space-y-2 mb-4">
            <p><span className="text-white font-medium">📅 Created:</span> March 1, 2024</p>
            <p><span className="text-white font-medium">👥 Members:</span> 12.4k</p>
            <p><span className="text-white font-medium">🟢 Online:</span> 320</p>
            <p><span className="text-white font-medium">🏅 Level Rank:</span> 4</p>
          </div>

          <div className="border-t border-gray-700 pt-4 text-sm space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-500 transition rounded py-2 font-semibold">
              🚀 Join Community
            </button>
            <div className="space-y-1 pt-2">
              <button className="w-full bg-gray-700 hover:bg-gray-600 transition rounded py-1">
                🧠 About This Hobby
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 transition rounded py-1">
                📎 Resources
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 transition rounded py-1">
                🎖️ Top Contributors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
