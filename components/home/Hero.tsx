"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profile from "@/personal-portfolio/src/assets/profile.png";

import { SectionContainer } from "../layout/SectionContainer";

const roles = ["Full Stack Developer", "Mobile App Developer", "AI Enthusiast"];

export function Hero() {
  const [introText, setIntroText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showName, setShowName] = useState(false);

  // Intro typing effect
  useEffect(() => {
    const intro = "Hi, I'm 👋";
    if (introText.length < intro.length) {
      const timeout = setTimeout(() => {
        setIntroText(intro.substring(0, introText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowName(true), 500);
    }
  }, [introText]);

  // Roles typing loop
  useEffect(() => {
    if (!showName) return;

    const handleTyping = () => {
      const fullRole = roles[roleIndex];
      if (!isDeleting) {
        setCurrentRole(fullRole.substring(0, currentRole.length + 1));
        setTypingSpeed(100);
        if (currentRole === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentRole(fullRole.substring(0, currentRole.length - 1));
        setTypingSpeed(50);
        if (currentRole === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, typingSpeed, showName]);

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      {/* Main Content Wrapper - Centered below navbar */}
      <div className="flex-1 flex items-center py-12 md:py-0">
        <SectionContainer>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
            {/* Left: Profile Image with Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex md:basis-[40%] justify-center"
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-heading rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                
                {/* Floating Animation Wrapper */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border-subtle/50 bg-surface shadow-2xl"
                >
                  <Image 
                    src={profile} 
                    alt="Kishan Kumar" 
                    fill 
                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700" 
                    priority 
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content Section */}
            <div className="md:basis-[60%] flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 md:mb-3 h-6 md:h-8">
                <span className="text-accent font-mono text-base md:text-xl">
                  {introText}
                </span>
                {introText.length < "Hi, I'm 👋".length && (
                  <span className="w-[2px] h-4 md:h-5 bg-accent animate-pulse" />
                )}
              </div>

              <AnimatePresence mode="wait">
                {showName && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h1 className="text-[clamp(2rem,8vw,5.5rem)] font-black mb-3 md:mb-4 tracking-tight leading-tight md:leading-none whitespace-nowrap">
                      <span className="bg-gradient-to-r from-accent via-accent/80 to-heading bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(126,224,214,0.3)]">
                        Kishan Kumar
                      </span>
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {showName && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="h-6 md:h-10 mb-3 md:mb-6"
                    >
                      <p className="text-lg md:text-2xl lg:text-3xl font-medium text-body/90">
                        <span className="text-accent">{currentRole}</span>
                        <span className="inline-block w-[2px] h-5 md:h-8 bg-accent ml-1 animate-pulse" />
                      </p>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-muted text-sm md:text-base lg:text-lg max-w-xl mb-6 md:mb-8 leading-relaxed font-medium"
                    >
                      Building high-performance applications with clean code and modern aesthetics. 
                      Specialized in crafting seamless digital experiences.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto mb-16 md:mb-0"
                    >
                      {/* CTA Button */}
                      <Link
                        href="/kishan k.resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 font-bold text-background transition-all duration-300 w-full sm:w-auto"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-heading rounded-xl transition-all duration-300 group-hover:scale-[1.05] group-hover:rotate-1 shadow-lg shadow-accent/20" />
                        <div className="absolute inset-0 bg-accent rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                        <span className="relative z-10">View Resume</span>
                      </Link>

                      {/* Social Icons */}
                      <div className="flex items-center gap-4 md:gap-5">
                        {[
                          { icon: Github, href: "https://github.com/Kishankumar-10", label: "GitHub" },
                          { icon: Linkedin, href: "https://www.linkedin.com/in/kishan-kumar-5890b0353", label: "LinkedIn" },
                          { icon: Mail, href: "mailto:kishankrcs096@gmail.com", label: "Email" },
                        ].map((social, i) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.1 }}
                            className="p-2 md:p-3 bg-surface border border-border-subtle rounded-xl text-body hover:text-accent hover:border-accent/50 transition-colors shadow-sm"
                          >
                            <social.icon size={20} />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Scroll Indicator - Positioned at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="text-accent/60" size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
