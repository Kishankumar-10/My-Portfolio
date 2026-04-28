"use client";

import { SectionContainer } from "../layout/SectionContainer";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDart,
  SiOpenjdk,
  SiPython,
  SiSqlite,
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiFastapi,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiCodepen,
  SiAndroidstudio,
  SiFirebase,
  SiGithubactions,
} from "react-icons/si";

type SkillItem = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color?: string;
};

const SkillCard = ({ name, Icon, color }: { name: string; Icon: SkillItem["icon"]; color?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 bg-surface border border-border-subtle rounded-xl transition-all duration-300 hover:border-accent/40 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/5 w-[100px] h-[100px] mx-auto group">
      <Icon 
        size={28} 
        className={color ? "opacity-90 group-hover:scale-110 transition-transform duration-300" : "text-accent/80 group-hover:scale-110 transition-transform duration-300"} 
        style={color ? { color } : undefined} 
      />
      <span className="text-[11px] font-bold text-heading text-center leading-tight uppercase tracking-wider">{name}</span>
    </div>
  );
};

const SkillGrid = ({ items }: { items: SkillItem[] }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 justify-center">
      {items.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} Icon={skill.icon} color={skill.color} />
      ))}
    </div>
  );
};

export function SkillsSection() {
  const languages: SkillItem[] = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "SQL", icon: SiSqlite, color: "#003B57" },
  ];

  const frameworks: SkillItem[] = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Riverpod", icon: SiDart },
  ];

  const tools: SkillItem[] = [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "REST API", icon: SiPostman, color: "#FF6C37" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: SiCodepen, color: "#007ACC" },
    { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
  ];

  return (
    <section id="skills" className="py-12 md:py-20">
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-heading text-center md:text-left">Skills</h2>

        <div className="flex flex-col gap-12 md:gap-16">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-heading border-b border-border-subtle pb-2 inline-block">
              Languages
            </h3>
            <SkillGrid items={languages} />
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-heading border-b border-border-subtle pb-2 inline-block">
              Frameworks & Libraries
            </h3>
            <SkillGrid items={frameworks} />
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-heading border-b border-border-subtle pb-2 inline-block">
              Tools & Platforms
            </h3>
            <SkillGrid items={tools} />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
