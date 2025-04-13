"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowRight,
} from "@tabler/icons-react";

const features = [
  {
    id: 1,
    title: "Smart Hobby Suggestions",
    description:
      "Get AI-powered hobby recommendations tailored to your goals, interests, and personality",
    icon: IconClipboardCopy,
    color: "from-purple-500/20 to-indigo-500/20",
    textColor: "text-purple-500",
  },
  {
    id: 2,
    title: "Personalized Hobby Levels",
    description:
      "Each hobby comes with unique, gamified levels to keep learning fun, engaging, and goal-driven",
    icon: IconFileBroken,
    color: "from-cyan-500/20 to-blue-500/20",
    textColor: "text-cyan-500",
  },
  {
    id: 3,
    title: "Seamless User Onboarding",
    description:
      "Effortless sign-up and onboarding flow with Clerk, capturing just enough to personalize the experience",
    icon: IconSignature,
    color: "from-orange-500/20 to-amber-500/20",
    textColor: "text-amber-500",
  },
  {
    id: 4,
    title: "Progressive Gamification Engine",
    description:
      "Track your journey, earn XP, unlock badges, and level up—turning self-growth into a rewarding game",
    icon: IconTableColumn,
    color: "from-green-500/20 to-emerald-500/20",
    textColor: "text-emerald-500",
  },
];

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title with animated underline */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400">
              Core Features
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Features grid with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className={`relative rounded-2xl border border-[#222] p-6 md:p-8 h-full overflow-hidden transition-all
                          ${
                            hoveredFeature === feature.id
                              ? "shadow-lg shadow-purple-900/10"
                              : ""
                          }`}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0`}
                animate={{ opacity: hoveredFeature === feature.id ? 0.2 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <motion.div
                className="relative mb-4"
                animate={{
                  scale: hoveredFeature === feature.id ? 1.05 : 1,
                  rotate: hoveredFeature === feature.id ? 5 : 0,
                }}
              >
                <div
                  className={`p-3 rounded-xl inline-block ${feature.color} bg-gradient-to-br`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-white relative">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed relative">
                {feature.description}
              </p>

              {/* Learn more button with arrow animation */}
              <motion.div
                className="mt-6 flex items-center text-sm relative"
                animate={{
                  opacity: hoveredFeature === feature.id ? 1 : 0.7,
                  x: hoveredFeature === feature.id ? 0 : -5,
                }}
                transition={{ duration: 0.2 }}
              >
                <span className={`font-medium ${feature.textColor}`}>
                  Learn more
                </span>
                <motion.div
                  animate={{
                    x: hoveredFeature === feature.id ? 5 : 0,
                    opacity: hoveredFeature === feature.id ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <IconArrowRight
                    className={`h-4 w-4 ml-1 ${feature.textColor}`}
                  />
                </motion.div>
              </motion.div>

              {/* Decorative corner accent */}
              <motion.div
                className={`absolute h-10 w-10 border-t-2 border-l-2 rounded-tl-lg top-0 left-0 opacity-0 ${feature.textColor.replace(
                  "text",
                  "border"
                )}`}
                animate={{ opacity: hoveredFeature === feature.id ? 0.7 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className={`absolute h-10 w-10 border-b-2 border-r-2 rounded-br-lg bottom-0 right-0 opacity-0 ${feature.textColor.replace(
                  "text",
                  "border"
                )}`}
                animate={{ opacity: hoveredFeature === feature.id ? 0.7 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative animated circles */}
        <div className="relative">
          <motion.div
            className="hidden md:block absolute -top-60 -right-40 w-96 h-96 rounded-full bg-purple-800/5 blur-3xl pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="hidden md:block absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-800/5 blur-3xl pointer-events-none"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.12, 0.07, 0.12],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
