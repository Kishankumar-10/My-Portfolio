"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layout, Smartphone, Server, Zap } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";

export function AboutSection() {
  const highlights = [
    {
      title: "Clean Architecture Mindset",
      description: "Focused on modular, maintainable, and testable code patterns.",
      icon: Layout,
    },
    {
      title: "Full-Stack + Mobile",
      description: "Seamlessly bridging the gap between mobile interfaces and robust backends.",
      icon: Smartphone,
    },
    {
      title: "Scalable Systems",
      description: "Architecting applications that grow with user demand and complexity.",
      icon: Server,
    },
    {
      title: "Problem-Solving Approach",
      description: "Turning complex requirements into elegant technical solutions.",
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-heading text-center md:text-left">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left Column: Intro Text */}
            <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-heading font-medium leading-relaxed text-center md:text-left">
                I am a Mobile App and Full-Stack Developer focused on building clean, 
                performant applications that solve real-world problems.
              </p>
              
              <div className="space-y-4">
                {[
                  "Passionate about writing code that is readable and maintainable.",
                  "Deepening understanding of distributed systems and advanced React patterns.",
                  "Moving towards roles demanding high technical precision and architectural foresight."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-muted-text text-sm md:text-base px-2 md:px-0">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                    <p className="leading-normal">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 md:p-5 bg-surface border border-border-subtle rounded-xl hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group w-full"
                >
                  <item.icon className="text-accent mb-3 group-hover:scale-110 transition-transform shrink-0" size={24} />
                  <h3 className="font-bold text-heading mb-1 text-base md:text-lg">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-text leading-snug">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
