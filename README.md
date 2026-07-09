# Kishan Kumar - Portfolio

A modern, responsive portfolio website showcasing my skills, experience, projects, and certifications. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Interactive Sections**:
  - Hero with typing effect
  - About Me with highlights
  - Experience timeline
  - Featured Projects
  - Skills showcase
  - Certifications gallery
  - Contact section
- **Modern UI/UX**: Clean design with consistent color scheme and typography
- **Static Site Generation**: Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **TypeScript**: For type safety
- **Font**: Geist (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kishankumar-10/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── favicon.ico
│   └── projects/
│       └── [slug]/
│           └── page.tsx     # Project detail page
├── components/
│   ├── home/
│   │   ├── About.tsx        # About Me section
│   │   ├── Certifications.tsx  # Certifications section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── FeaturedProjects.tsx  # Featured projects grid
│   │   ├── Hero.tsx         # Hero section
│   │   └── Skills.tsx       # Skills showcase
│   └── layout/
│       ├── Navbar.tsx       # Navigation bar
│       ├── SectionContainer.tsx  # Section wrapper
│       └── SectionDivider.tsx    # Section divider
├── data/
│   └── projects.ts          # Project data
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── assets/
│   │   └── profile.png      # Profile picture
│   ├── certificates/        # Certificate images
│   └── resume.pdf           # Resume
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Customization

### Adding New Projects

Edit `data/projects.ts` to add new projects to the portfolio.

### Adding New Featured Projects

Edit the `featuredProjects` array in `components/home/FeaturedProjects.tsx`.

### Updating Personal Information

- **Profile**: Update the Hero component in `components/home/Hero.tsx`
- **About**: Edit `components/home/About.tsx`
- **Experience**: Modify `components/home/Experience.tsx`
- **Skills**: Update `components/home/Skills.tsx`
- **Certifications**: Edit `components/home/Certifications.tsx`
- **Contact**: Modify `components/home/Contact.tsx`

## Screenshots

<!-- Add screenshots here later -->
<!-- ![Hero Section](public/screenshots/hero.png) -->
<!-- ![About Section](public/screenshots/about.png) -->

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: kishankrcs096@gmail.com
- **GitHub**: [Kishankumar-10](https://github.com/Kishankumar-10)
- **LinkedIn**: [Kishan Kumar](https://www.linkedin.com/in/kishan-kumar-5890b0353)
