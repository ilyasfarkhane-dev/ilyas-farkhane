'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

// Mock data - in a real app, this would come from your database
const projects = [
  {
    id: 1,
    title: "UniMarket – Full-Stack Marketplace Platform",
    description:
      "A scalable full-stack marketplace platform designed to empower local vendors and entrepreneurs. Built with Next.js and TypeScript, it features secure Stripe payments, dynamic inventory management, and a real-time analytics dashboard powered by Redis. Backed by PostgreSQL, UniMarket offers a seamless and data-driven shopping experience tailored for modern commerce.",
    image: "/pr1.png",
    technologies: ["Next.js", "TypeScript", "Express.js", "MySql", "Node.js", "React.js"],
    liveUrl: "https://uni-mrkt.com",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Feizhoucom – Communication, Branding & Strategy",
    description:
      "A modern and creative website for a communication and advertising agency, offering tailored branding strategies, digital marketing solutions, and impactful content creation. From social media campaigns to visual identity design, the platform helps businesses grow their presence and connect with their audience effectively.",
    image: "/pr2.png",
    technologies: ["Next.js", "TypeScript", "Express.js", "MySql", "Node.js", "React.js"],
    liveUrl: "https://www.feizhoucom.com",
    featured: true,
    category: "Branding",
  },
  {
    id: 3,
    title: "SAIDTEX – Professional Textile Showcase",
    description: "A clean and modern showcase website for a textile company, presenting its range of services, areas of expertise, and trusted industry partners. Designed to highlight quality, innovation, and collaboration, the site offers a clear view of the company's values and professional textile solutions.",
    image: "/pr3.png",
    technologies: ["Next.js", "TypeScript", "Express.js", "MySql", "Node.js", "React.js"],
    liveUrl: "http://saidtex.vercel.app/",
    featured: true,
    category: "Showcase",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 font-sans">
      {/* Back to Home Button */}
      <section className="absolute top-8 left-4 lg:left-6 z-10">
        <AnimatedSection>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Home
            </Link>
          </Button>
        </AnimatedSection>
      </section>

      {/* Header */}
      <section className="pt-32 pb-20 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-white/90">My</span>
                <span className="block text-5xl lg:text-7xl bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A collection of my work showcasing expertise in web development, design, and digital solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.2 * index}>
                <Card className="group overflow-hidden border-0 bg-gray-900/70 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-orange-500 to-orange-300 text-white border-0 shadow-lg">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button
                          className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            className="border-2 border-gray-700 text-gray-400 hover:bg-gray-800 transition-all duration-300"
                            asChild
                          >
                            <Link href={project.githubUrl} target="_blank">
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
