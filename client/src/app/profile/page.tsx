"use client";
import { Sidebar } from "@/components/index";

export default function DuolingoProfile() {
  return (
    <div className="flex flex-row">
        <div>
            <Sidebar/>
        </div>

    <div className="min-h-screen flex flex-1 flex-col bg-[#0f1923] text-white p-6 font-sans">
      {/* Top section: banner + profile info */}
      <div className="flex justify-between flex-wrap gap-4">
        {/* Left: Banner & Basic Info */}
        <div className="flex-1">
          <div className="bg-[#e5e5e5] h-32 w-full rounded-xl flex items-center justify-center relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile Avatar"
              className="absolute bottom-[-30px] left-6 w-20 h-20 rounded-full border-4 border-[#0f1923]"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-1">
              ✏
            </button>
          </div>
          <div className="mt-10 pl-6">
            <h2 className="text-xl font-bold">Vivek</h2>
            <p className="text-gray-400 text-sm">Vivek783720</p>
            <p className="text-sm text-gray-400 mt-1">Joined April 2025</p>
            <p className="mt-1 text-sm text-blue-400">
              0 Following &nbsp;&nbsp; 0 Followers
            </p>
          </div>
        </div>

        {/* Right: Stats & Social */}
        <div className="w-full md:w-72 bg-[#0f1923] border border-gray-700 rounded-xl p-4 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <img
              src="https://flagcdn.com/in.svg"
              alt="IN"
              className="w-6 h-4"
              />
            <div className="flex gap-2">
              <span>🔥 0</span>
              <span className="text-cyan-400">🔷 500</span>
              <span className="text-red-400">❤ 4</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-600">
            <button className="flex-1 text-sm text-blue-400 border-b-2 border-blue-400 py-1">
              FOLLOWING
            </button>
            <button className="flex-1 text-sm text-gray-400 py-1">
              FOLLOWERS
            </button>
          </div>

          {/* Info */}
          <div className="text-sm text-gray-300">
            <img
              src="/fanart.svg"
              alt="social"
              className="w-full h-32 object-contain"
              />
            <p className="mt-2">
              Learning is more fun and effective when you connect with others.
            </p>
          </div>

          {/* Friend Buttons */}
          <div className="space-y-2 text-sm">
            <button className="w-full bg-gray-700 py-2 rounded-lg hover:bg-gray-600 transition">
              🔍 Find friends
            </button>
            <button className="w-full border border-gray-600 py-2 rounded-lg hover:bg-gray-700 transition">
              💌 Invite friends
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-3">Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {[
              { label: "Day streak", value: "0", icon: "🔥" },
              { label: "Total XP", value: "0", icon: "⚡" },
              { label: "Current league", value: "None", icon: "🏆" },
              { label: "Top 3 finishes", value: "0", icon: "🎖" },
            ].map((stat, i) => (
                <div
                key={i}
                className="bg-[#15202b] border border-gray-700 rounded-xl p-4"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Achievements</h3>
          <button className="text-blue-400 text-sm">VIEW ALL</button>
        </div>
        <p className="text-gray-500 mt-4">No achievements yet</p>
      </div>
    </div>
    </div>
  );
}