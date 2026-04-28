"use client";

import { useState } from "react";
import { ExternalLink, Clock, X, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionContainer } from "../layout/SectionContainer";

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  status?: "In Progress" | "Completed";
  image?: string;
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    year: "2026 — Present",
    status: "In Progress",
    featured: true,
  },
  {
    id: 2,
    name: "Introduction to Internet of Things",
    issuer: "NPTEL (IIT Kharagpur)",
    year: "2025",
    status: "Completed",
    image: "/certificates/nptel-iot.jpg",
  },
  {
    id: 3,
    name: "Remote Sensing: Principles and Applications",
    issuer: "NPTEL (IIT Bombay)",
    year: "2025",
    status: "Completed",
    image: "/certificates/nptel-remote-sensing.jpg",
  },
  {
    id: 4,
    name: "Explore App Development with MERN Stack",
    issuer: "LinkedIn Learning",
    year: "2025",
    status: "Completed",
    image: "/certificates/mern-linkedin.jpg",
  },
  {
    id: 5,
    name: "No-Code App Development",
    issuer: "Kodacy",
    year: "2025",
    status: "Completed",
    image: "/certificates/no-code-kodacy.jpg",
  },
];

export function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredCert = certifications.find(c => c.featured);
  const otherCerts = certifications.filter(c => !c.featured);

  return (
    <section id="certifications" className="py-12 md:py-20">
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-heading text-center md:text-left">Certifications</h2>
      
        <div className="space-y-8 md:space-y-10">
          {/* Featured Certification */}
          {featuredCert && (
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                <Trophy size={14} className="md:w-4 md:h-4" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Featured Achievement</span>
              </div>
              <div className="relative group bg-surface border border-accent/20 rounded-xl p-4 md:p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-heading group-hover:text-accent transition-colors">
                        {featuredCert.name}
                      </h3>
                      {featuredCert.status === "In Progress" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[9px] md:text-[10px] font-bold rounded-full border border-yellow-500/20 uppercase tracking-tight">
                          <Clock size={10} /> {featuredCert.status}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-muted-text font-medium">
                      <span>{featuredCert.issuer}</span>
                      <span className="text-border-subtle">•</span>
                      <span className="text-[10px] md:text-xs font-mono opacity-60">{featuredCert.year}</span>
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex justify-center">
                    <button 
                      disabled
                      className="px-4 py-2 bg-border-subtle/30 text-muted-text text-[10px] md:text-xs font-bold rounded-lg cursor-not-allowed flex items-center gap-2 opacity-50 border border-border-subtle"
                    >
                      View Credential <ExternalLink size={12} className="md:w-3.5 md:h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Certifications Grid */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-[10px] md:text-xs font-bold text-muted/50 uppercase tracking-[0.2em] border-b border-border-subtle/50 pb-2 text-center md:text-left">
              Other Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {otherCerts.map((cert) => (
                <div 
                  key={cert.id}
                  className="group flex flex-col justify-between p-4 md:p-5 bg-surface border border-border-subtle rounded-xl hover:border-accent/30 hover:bg-surface/50 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="mb-3 md:mb-4 text-center md:text-left">
                    <h4 className="text-sm md:text-base font-bold text-heading group-hover:text-accent transition-colors line-clamp-2">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-[10px] md:text-xs text-muted-text">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="text-border-subtle opacity-50">•</span>
                      <span className="font-mono opacity-50">{cert.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center md:justify-end mt-auto">
                    <button 
                      onClick={() => cert.image && setSelectedImage(cert.image)}
                      className="px-3 py-1.5 bg-background border border-border-subtle text-heading text-[9px] md:text-[10px] font-bold rounded-md hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-1.5 uppercase tracking-wide group/btn"
                    >
                      View <ExternalLink size={10} className="md:w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="absolute inset-0 bg-background/90 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video bg-surface rounded-2xl overflow-hidden border border-border-subtle shadow-2xl z-10"
              >
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-background/50 hover:bg-accent text-heading hover:text-background rounded-full backdrop-blur-md transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
                
                <div className="relative w-full h-full p-2 md:p-4">
                  <Image 
                    src={selectedImage} 
                    alt="Certificate" 
                    fill 
                    className="object-contain"
                    sizes="(max-w-7xl) 100vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </SectionContainer>
    </section>
  );
}
