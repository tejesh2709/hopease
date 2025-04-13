import { motion } from "framer-motion";
import Particles from "@/components/ui/Particles";
import { useRef } from "react";
import Link from "next/link";

export default function TrySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(200, 150, 255, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(140, 90, 213, 0.4) 0%, rgba(90, 60, 170, 0.2) 30%, rgba(0,0,0,0) 70%)",
          }}
        />
        <motion.div
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(180,130,255,0.15) 0%, rgba(180,130,255,0.05) 40%, rgba(0,0,0,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-[40vh] h-[40vh]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(140,90,255,0.1) 0%, rgba(140,90,255,0) 70%)",
            filter: "blur(50px)",
          }}
        />

        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/3 w-[50vh] h-[50vh]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(110,70,200,0.1) 0%, rgba(110,70,200,0) 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        <Particles
          particleColors={["#ffffff", "#e2d7ff", "#cabbff"]}
          particleCount={180}
          particleSpread={15}
          speed={0.08}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <div
        className="absolute inset-0 z-1 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center max-w-3xl px-6 text-center"
      >
        <motion.h1
          variants={titleVariants}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200"
        >
          Stop Scrolling
        </motion.h1>

        <motion.p
          variants={subtitleVariants}
          className="text-lg md:text-xl text-purple-100/90 font-light leading-relaxed mb-10 max-w-xl"
        >
          Rewire your unconscious mind to be your best self by your own human
          nature, using your curiosity.
        </motion.p>
        <Link href="/survey" className="text-white">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative group overflow-hidden bg-white text-[#330066] text-lg font-medium py-3 px-8 rounded-full shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            <span className="relative flex items-center gap-2">
              Start Now
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </motion.button>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/50"
          >
            <path
              d="M12 5L12 19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
