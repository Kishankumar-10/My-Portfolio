"use client";
import { motion } from "framer-motion";
import { 
  Code, Smartphone, Database, Globe, Server, Terminal, 
  Layout, GitBranch, Figma, Layers, Box 
} from "lucide-react";
import { FullBleedSection } from "@/components/layout/FullBleedSection";


const marqueeData = {
  skills: [
    { name: "Frontend Development", icon: Layout },
    { name: "Mobile Development", icon: Smartphone },
    { name: "Backend Systems", icon: Server },
    { name: "Database Design", icon: Database },
    { name: "Clean Architecture", icon: Layers },
    { name: "API Design", icon: Globe },
  ],
  libraries: [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "Flutter", icon: Smartphone },
    { name: "Tailwind CSS", icon: Layout },
    { name: "Framer Motion", icon: Box },
    { name: "Redux", icon: Layers },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "VS Code", icon: Terminal },
    { name: "Docker", icon: Box },
    { name: "Postman", icon: Globe },
    { name: "Figma", icon: Figma },
    { name: "TypeScript", icon: Code },
  ]
};

type Item = { name: string; icon: React.ComponentType<{ size?: number; className?: string }> };
const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: Item[], direction?: "left" | "right", speed?: number }) => {

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden relative w-full py-4 select-none">
      <motion.div
        className="flex gap-16 flex-nowrap whitespace-nowrap min-w-full"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedItems.map((item, i) => (
          <div key={`${item.name}-${i}`} className="flex items-center gap-4 text-muted">
            <item.icon size={24} className="stroke-[1.5] text-accent/80" />
            <span className="text-xl font-medium tracking-tight">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function SkillsMarquee() {
  return (
    <FullBleedSection className="bg-surface border-y border-border-subtle py-16">
      <div className="overflow-hidden flex flex-col gap-10">
        <MarqueeRow items={marqueeData.skills} direction="left" speed={40} />
        <MarqueeRow items={marqueeData.libraries} direction="right" speed={45} />
        <MarqueeRow items={marqueeData.tools} direction="left" speed={50} />
      </div>
    </FullBleedSection>
  );
}
