import { motion } from "framer-motion";
import Particles from "@/components/ui/Particles";

export default function Footer() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Static Glow at Center */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(circle at center, rgba(200,150,255,0.8) 0%, rgba(200,150,255,0.8) 10%, rgba(0,0,0,1) 40%)",
          filter: "blur(8px)",
        }}
      />
      
      {/* Particles (ensuring full width and height) */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Text Overlay */}
      <motion.div className="relative z-10 flex flex-col gap-8 items-center justify-center w-full h-full">
        <h1 className="text-white text-4xl font-bold">Try it Now</h1>
        <div className="bg-white text-black text-[14px] font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-100 cursor-pointer transition">
          Get Started
        </div>
      </motion.div>
    </div>
  );
}
