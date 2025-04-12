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
    title: "Invisible Security",
    description:
      "Your original media remains unchanged as encrypted ownership metadata is discreetly embedded within it",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Robust Encryption",
    description:
      "Utilizes AES encryption to safeguard hidden information, making unauthorized decoding virtually impossible",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tamper-Proof Ownership",
    description:
      "Easily extract and verify embedded data to prove authenticity and claim ownership in disputes",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cross-Media Compatibility",
    description:
      "Designed to work seamlessly with images, videos, and documents, catering to diverse creative needs",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default Features;