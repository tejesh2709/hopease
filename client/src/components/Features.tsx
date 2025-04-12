import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid"
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

function Features() {
  return (
  <>
    <div className="text-center text-bold text-[7vw] py-10">
        Features
    </div>
    <BentoGrid className="max-w-4xl relative mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  </>)
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Smart Hobby Suggestions",
    description:
      "Get AI-powered hobby recommendations tailored to your goals, interests, and personality",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "RobustPersonalized Hobby Levels Encryption",
    description:
      "Each hobby comes with unique, gamified levels to keep learning fun, engaging, and goal-driven.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Seamless User Onboarding",
    description:
      "Effortless sign-up and onboarding flow with Clerk, capturing just enough to personalize the experience",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Progressive Gamification Engine",
    description:
      "Track your journey, earn XP, unlock badges, and level up—turning self-growth into a rewarding game",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default Features;