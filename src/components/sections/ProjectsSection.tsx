import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-[var(--bg-secondary)] rounded-3xl">
      <SectionHeading
        eyebrow="Projects"
        title="The Core Four"
        subtitle="Four production-ready applications — each solving a distinct engineering challenge."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
