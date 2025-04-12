'use client';
import { useState } from 'react';

export default function CommunitiesPage() {
  const hobbyCommunities = [
    {
      name: "🎨 Digital Art",
      description: "Sketch, paint or animate — let’s get creative!",
    },
    {
      name: "📚 Bookworms",
      description: "Read. Review. Repeat. Join the reading marathon!",
    },
    {
      name: "🎸 Music Makers",
      description: "Compose, jam, or remix with fellow musicians.",
    },
    {
      name: "🧘 Mindful Living",
      description: "Habits, journaling, and peace — we’re all about balance.",
    },
    {
      name: "📷 Photography",
      description: "Capture moments and share perspectives.",
    },
  ];

  const leaderboard = [
    { name: "Maya", points: 1500 },
    { name: "Arjun", points: 1200 },
    { name: "Zara", points: 950 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">🌱 Hobby Communities</h1>

      {/* Journal / Profile */}
      <div className="bg-gray-800 p-5 rounded-2xl mb-10 shadow-xl hover:scale-[1.01] transition">
        <h2 className="text-2xl font-semibold mb-2">🪪 Your Hobby Journal</h2>
        <p className="text-gray-300">
          You’ve been growing in <strong>Digital Art</strong>. You completed 3 beginner challenges and earned your first badge! 🌟
        </p>
        <p className="text-sm text-gray-500 mt-1">Keep learning, keep sketching 🎨</p>
      </div>

      {/* Communities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {hobbyCommunities.map((hobby, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-5 hover:shadow-lg transition-all hover:scale-[1.01]"
          >
            <h3 className="text-xl font-bold mb-1">{hobby.name}</h3>
            <p className="text-gray-400 mb-3">{hobby.description}</p>
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition">
              Join Community
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
