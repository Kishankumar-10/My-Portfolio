"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Calendar, Building2, Briefcase } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Chiac ASI (AI-focused venture)",
    duration: "2026 — Present",
    description: [
      "Developing an AI-based research summarization feature to extract structured insights from academic papers",
      "Building a classroom-style course management system with role-based authentication flows",
      "Implementing core application features and responsive UI components for seamless user interaction",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "Codec Technologies",
    duration: "Nov 2025 — Mar 2026",
    description: [
      "Developed and deployed a real-time weather application with API-driven data rendering",
      "Implemented asynchronous data fetching workflows for smooth performance across networks",
      "Designed and implemented responsive UI with dynamic state updates for real-time display",
    ],
    techStack: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    buttons: [
      {
        label: "View Certificate",
        path: "/certificates/codec-internship-certificate.pdf",
      },
      {
        label: "View LOR",
        path: "/certificates/codec-lor.pdf",
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-heading text-center md:text-left">Experience</h2>

          <div className="relative border-l-0 md:border-l md:border-border-subtle md:ml-6 space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-12 group"
              >
                {/* Timeline Dot (Desktop only) */}
                <div className="hidden md:block absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-border-subtle group-hover:bg-accent group-hover:scale-125 transition-all duration-300 ring-4 ring-background" />

                <div className="bg-surface border border-border-subtle p-5 md:p-6 rounded-xl md:rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 text-accent mb-1.5">
                        <Briefcase size={14} className="md:w-4 md:h-4" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Professional Experience</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-heading mb-1.5">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-muted-text">
                        <span className="flex items-center gap-1.5 text-xs md:text-sm font-medium">
                          <Building2 size={14} className="text-muted" />
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-medium bg-background border border-border-subtle text-accent">
                          <Calendar size={10} className="mr-1.5" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {exp.buttons?.map((btn) => (
                        <Link
                          key={btn.label}
                          href={btn.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-background border border-border-subtle text-[10px] md:text-xs font-semibold text-heading rounded-lg hover:border-accent hover:text-accent transition-all duration-300 shadow-sm"
                        >
                          {btn.label}
                          <ExternalLink size={12} />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 text-center md:text-left">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start md:items-start justify-center md:justify-start gap-3 text-muted-text text-xs md:text-sm leading-relaxed px-2 md:px-0">
                        <div className="mt-2 w-1 h-1 rounded-full bg-accent/40 shrink-0 hidden md:block" />
                        <p className="line-clamp-3">{item}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4 border-t border-border-subtle/50">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] md:text-[10px] font-mono text-muted-text bg-background px-2 py-0.5 rounded-full border border-border-subtle hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
