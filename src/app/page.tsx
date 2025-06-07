import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";

const featuredProjects = [
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
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hi, I'm <span className="gradient-text">Your Name</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A passionate developer crafting beautiful and functional web experiences
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                  <Link href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((skill) => (
                <div
                  key={skill}
                  className="glass-card text-center hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-violet-600/10"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
