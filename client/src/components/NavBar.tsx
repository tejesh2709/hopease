import { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "motion/react";
import useScroll from "@/lib/hooks/use-scroll";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";


const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Protect</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative font-[500] z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-[14px]"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-2 rounded-full bg-black md:h-10"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

function Navbar() {

  const scrolled = useScroll(50);

  return (
    <header
      className={`w-screen fixed z-10 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-[20px] font-[700] text-white mb-4 md:mb-0 h-full">
          Hopease
        </h1>
        <nav className="w-full md:w-auto">
          <SlideTabs />
        </nav>
        <div className="mt-4 md:mt-0">
          {/* <button className="bg-white text-black text-[14px] font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-100 cursor-pointer transition">
            Get Started
          </button> */}
          <div className="bg-white text-black text-[14px] font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-100 cursor-pointer transition">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
