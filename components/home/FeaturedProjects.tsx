"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "AI Powered Antivirus",
      description:
        "Real-time system security monitoring using machine-learning-based anomaly detection for threat prevention.",
      techStack: ["Next.js", "React", "FastAPI", "Tailwind CSS", "ML"],
      link: "https://github.com/Kishankumar-10/AI_Shield-With-Anomaly-Detection",
    },
    {
      title: "QuizFlow — Quiz App",
      description:
        "A mobile quiz app for developers with focus modes and customizable practice sessions.",
      techStack: ["Flutter", "Dart", "Shared Prefs", "HTTP", "FastAPI"],
      link: "https://github.com/Kishankumar-10/quiz_flow",
    },
    {
      title: "Reels App",
      description:
        "A short-video reels app with category-based content selection and smooth playback.",
      techStack: ["Flutter", "Dart", "Riverpod", "Chewie"],
      link: "https://github.com/Kishankumar-10/flutter-reels-app",
    },
    {
      title: "HireScan — Fake Job Prediction",
      description:
        "An NLP-based system that detects fake job postings using machine-learning classification.",
      techStack: ["Python", "NLP", "scikit-learn"],
      link: "https://github.com/Kishankumar-10/HireScan-fake-job-post-prediction",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-heading">Featured Projects</h2>
            <Link 
              href="https://github.com/Kishankumar-10" 
              target="_blank" 
              className="text-xs md:text-sm font-medium text-muted-text hover:text-accent transition-colors flex items-center gap-2"
            >
              View all on GitHub <ExternalLink size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {featuredProjects.map((proj, index) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-surface border border-border-subtle rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col h-full transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex flex-col h-full text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl text-heading mb-2 md:mb-3 group-hover:text-accent transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-muted-text text-xs md:text-sm mb-4 md:mb-6 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2 mb-6 mt-auto">
                    {proj.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-accent/5 px-2 py-0.5 md:py-1 rounded-md border border-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-background border border-border-subtle text-xs md:text-sm font-bold text-heading rounded-lg md:rounded-xl hover:border-accent hover:text-accent transition-all duration-300 group/btn"
                  >
                    Source Code
                    <Github size={14} className="md:w-4 md:h-4 group-hover/btn:scale-110 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
