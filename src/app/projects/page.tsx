import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";

const allProjects = [
  {
    title: "Project 1",
    description: "A brief description of your first project and its key features.",
    image: "/project1.jpg",
    tags: ["Next.js", "React", "TypeScript"],
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of your second project and its key features.",
    image: "/project2.jpg",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of your third project and its key features.",
    image: "/project3.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold text-center mb-4">All Projects</h1>
            <p className="text-muted-foreground text-center mb-12 max-w-[700px] mx-auto">
              A collection of my work and personal projects. Each project represents a unique challenge and learning experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 