export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  slug: string;
  fullDescription?: string;
  problem?: string;
  constraints?: string;
  solution?: string;
  decisions?: string;
  outcome?: string;
  improvements?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "EcoTrack Mobile",
    description: "Track carbon footprint with real-time transport detection.",
    techStack: ["Flutter", "Firebase", "Google Maps API"],
    slug: "ecotrack-mobile",
    fullDescription: "A mobile application designed to help users track and reduce their carbon footprint by automatically detecting their mode of transportation.",
    problem: "Users struggle to manually log their daily commute to calculate carbon emissions.",
    constraints: "Low battery usage requirement for background location tracking. Offline support for areas with poor connectivity.",
    solution: "Implemented activity recognition API to detect transport mode. Used local database for offline storage and synced when online.",
    decisions: "Chose Flutter for cross-platform consistency. Firebase for real-time data sync.",
    outcome: "Achieved 95% accuracy in transport detection. 4.8 star rating on beta testing.",
    improvements: "Add gamification features and social sharing.",
  },
  {
    id: "2",
    title: "CodeSync Platform",
    description: "Real-time collaborative code editor for remote interviews.",
    techStack: ["Next.js", "Socket.io", "Monaco Editor"],
    slug: "codesync-platform",
    fullDescription: "A web-based platform allowing interviewers and candidates to write and execute code in real-time.",
    problem: "Existing tools lack integrated video calling and custom environment setups.",
    constraints: "Low latency requirement for typing synchronization. Secure execution environment for user code.",
    solution: "Used operational transformation for conflict resolution. Docker containers for isolated code execution.",
    decisions: "Next.js for server-side rendering. Socket.io for low-latency communication.",
    outcome: "Reduced interview setup time by 40%. Supports 10+ programming languages.",
    improvements: "Add playback feature for interview review.",
  },
];
