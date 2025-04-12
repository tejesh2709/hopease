"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface NavItem {
  id: string;
  name: string;
  icon: string;
  href: string;
}

interface SidebarProps {
  activeNavId?: string;
  onNavChange?: (navId: string) => void;
  navItems?: NavItem[];
  logo?: {
    firstPart: string;
    secondPart: string;
  };
  className?: string;
}

const defaultNavItems: NavItem[] = [
  {
    id: "home",
    name: "Home",
    icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    href: "/home",
  },
  {
    id: "map",
    name: "Curiosity Map",
    icon: "M5 4v16c0 1.1.9 2 2 2h13V4H5zm2 2h9v12H7V6zm-3 0H2v16c0 1.1.9 2 2 2h1V6z",
    href: "/map",
  },
  {
    id: "spaces",
    name: "Spaces",
    icon: "M16 6V4a4 4 0 00-8 0v2H3v2h1l1.44 12.14A2 2 0 007.42 22h9.16a2 2 0 002-1.86L20 8h1V6h-5zM10 4a2 2 0 014 0v2h-4V4z",
    href: "/spaces",
  },
  {
    id: "profile",
    name: "Profile",
    icon: "M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-2.72 0-8 1.36-8 4v2h16v-2c0-2.64-5.28-4-8-4z",
    href: "/profile",
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  activeNavId = "home",
  onNavChange,
  navItems = defaultNavItems,
  logo = { firstPart: "Hobby", secondPart: "Horizon" },
  className = "",
}) => {
  // State for active navigation item
  const [activeNav, setActiveNav] = useState(activeNavId);

  // Update active nav when prop changes
  useEffect(() => {
    setActiveNav(activeNavId);
  }, [activeNavId]);

  // Handle navigation item click
  const handleNavClick = (navId: string) => {
    setActiveNav(navId);
    if (onNavChange) {
      onNavChange(navId);
    }
  };

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-72 backdrop-blur-xl bg-[#121212]/80 flex flex-col p-8 space-y-8 shadow-2xl relative z-10 border-r border-[#2a2a2a] ${className}`}
    >
      {/* Logo / Name with 3D effect */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-extrabold pb-6 border-b border-[#2a2a2a]"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
          {logo.firstPart}
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
          {logo.secondPart}
        </span>
      </motion.div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href} passHref>
            <motion.a
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
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
          </Link>
        ))}
      </nav>

      {/* Bottom accent */}
      <div className="mt-auto pt-6 border-t border-[#2a2a2a]">
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-500/80 via-indigo-500/80 to-blue-500/80 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.5 }}
        />
      </div>
    </motion.aside>
  );
};

export default Sidebar;