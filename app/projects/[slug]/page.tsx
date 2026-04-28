import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Kishan Kumar`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SectionContainer>
      <div className="py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-heading">{project.title}</h1>
        <p className="text-xl text-muted-text leading-relaxed max-w-2xl">{project.fullDescription}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-16 border-b border-border-subtle pb-12">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-sm font-mono text-accent bg-surface px-3 py-1 rounded border border-border-subtle">
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-heading">Problem Statement</h2>
          <p className="text-body leading-relaxed">{project.problem}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-heading">Constraints</h2>
          <p className="text-body leading-relaxed">{project.constraints}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-heading">Solution Approach</h2>
          <p className="text-body leading-relaxed">{project.solution}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-heading">Key Technical Decisions</h2>
          <p className="text-body leading-relaxed">{project.decisions}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-heading">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video bg-surface border border-border-subtle rounded flex items-center justify-center text-muted-text">
              Project Screenshot 1
            </div>
            <div className="aspect-video bg-surface border border-border-subtle rounded flex items-center justify-center text-muted-text">
              Project Screenshot 2
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-heading">Outcome & Learnings</h2>
          <p className="text-body leading-relaxed">{project.outcome}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-heading">Improvements / Next Steps</h2>
          <p className="text-body leading-relaxed">{project.improvements}</p>
        </section>
      </div>
      </div>
    </SectionContainer>
  );
}
