"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";

export function ContactSection() {
  const contactLinks = [
    {
      name: "Email",
      value: "kishankrcs096@gmail.com",
      href: "mailto:kishankrcs096@gmail.com",
      icon: Mail,
      subtext: "Send me an email anytime",
    },
    {
      name: "GitHub",
      value: "github.com/Kishankumar-10",
      href: "https://github.com/Kishankumar-10",
      icon: Github,
      subtext: "Check out my open-source projects",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/kishan-kumar",
      href: "https://www.linkedin.com/in/kishan-kumar-5890b0353",
      icon: Linkedin,
      subtext: "Connect with me professionally",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left Column: Heading & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-heading">Get in Touch</h2>
            <p className="text-lg md:text-xl text-muted-text leading-relaxed max-w-md mx-auto md:mx-0">
              Building clean, scalable mobile and full-stack applications. If you’re working on something meaningful, let’s connect.
            </p>
            
            <div className="mt-8 md:mt-10 hidden md:block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent rounded-full border border-accent/10 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for opportunities
              </div>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="grid gap-3 md:gap-4">
            {contactLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-surface border border-border-subtle rounded-xl md:rounded-2xl transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-background rounded-full flex items-center justify-center text-accent border border-border-subtle group-hover:border-accent/30 transition-colors">
                  <link.icon size={24} className="md:w-7 md:h-7" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5 md:mb-1">
                    <h3 className="text-base md:text-lg font-bold text-heading group-hover:text-accent transition-colors truncate">
                      {link.name}
                    </h3>
                    <ExternalLink size={12} className="text-muted/40 group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <p className="text-muted-text font-medium text-xs md:text-sm mb-0.5 md:mb-1 truncate">{link.value}</p>
                  <p className="text-[10px] md:text-xs text-muted/60 truncate">{link.subtext}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
