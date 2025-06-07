'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink,ArrowUpRight, Mail ,Github, ArrowRight, Code, Palette, Zap, Star, Award, Users, Menu, X, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

// Smooth scroll function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Mock data - in a real app, this would come from your database
const projects: {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}[] = [
  {
    id: 1,
    title: "UniMarket – Full-Stack Marketplace Platform ",
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
    technologies:  ["Next.js", "TypeScript", "Express.js", "MySql", "Node.js", "React.js"],
    liveUrl: "https://www.feizhoucom.com",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "SAIDTEX – Professional Textile Showcase",
    description: "A clean and modern showcase website for a textile company, presenting its range of services, areas of expertise, and trusted industry partners. Designed to highlight quality, innovation, and collaboration, the site offers a clear view of the company's values and professional textile solutions.",
    image: "/pr3.png",
    technologies: ["Next.js", "TypeScript", "Express.js", "MySql", "Node.js", "React.js"],
    liveUrl: "http://saidtex.vercel.app/",
    featured: true,
    category: "Full-Stack",
  },
]

const skills = [
  {
    name: "Frontend Architecture",
    icon: Code,
    description: "React, Next.js, Vue.js, TypeScript",
    level: "Expert",
    projects: "25+ Projects",
  },
  {
    name: "UI/UX Excellence",
    icon: Palette,
    description: "Figma, Design Systems, Accessibility",
    level: "Advanced",
    projects: "15+ Designs",
  },
  {
    name: "Backend Systems",
    icon: Zap,
    description: "Node.js, Python, Microservices, Cloud",
    level: "Expert",
    projects: "20+ APIs",
  },
]

const achievements = [
  { icon: Star, value: "5+", label: "Projects Delivered" },
  { icon: Award, value: "2+", label: "Years Experience" },
  { icon: Users, value: "5+", label: "Happy Clients" },
]

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 font-sans scroll-smooth overflow-x-hidden"
    >
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="top-0 md:top-[38px] w-full z-[100] bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50 shadow-sm rounded-2xl"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              <Image src="/if.png" alt="Portfolio Logo" width={40} height={40} className="object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-8">
              <Link
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="text-gray-400 hover:text-orange-500 transition-colors font-medium relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-gray-400 hover:text-orange-500 transition-colors font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-gray-400 hover:text-orange-500 transition-colors font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            <div className="hidden md:block">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Hire Me</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-400" />
              ) : (
                <Menu className="h-6 w-6 text-gray-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800/50">
              <div className="flex flex-col gap-6">
                <Link
                  href="#projects"
                  onClick={(e) => {
                    scrollToSection(e, 'projects');
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  Projects
                </Link>
                <Link
                  href="#about"
                  onClick={(e) => {
                    scrollToSection(e, 'about');
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    scrollToSection(e, 'contact');
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors font-medium py-2"
                >
                  Contact
                </Link>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="#contact" onClick={(e) => {
                    scrollToSection(e, 'contact');
                    setIsMenuOpen(false);
                  }}>Hire Me</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="pt-16 md:pt-32 pb-20 px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-10"
            >
              {/* Status Badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-sm font-medium text-gray-200">
                  Open to opportunities
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                  <span className="block font-sans text-4xl lg:text-5xl text-orange-500 mb-2">ILYAS FARKHANE</span>
                  <span className="block text-white/90">Full-Stack</span>
                  <span className="block text-7xl bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                  MERN Developer
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                  Building digital experiences that bridge creativity and technology. 
                  Specializing in modern web applications.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <a href="mailto:ilyasfarkhane@gmail.com" className="group bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-2">
                  Get in touch
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/ilyasfarkhane-dev" className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5 text-gray-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/ilyasfarkhane/" className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-300" />
                  </a>
                  <a href="mailto:ilyasfarkhane@gmail.com" className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Section - Ultra Modern Design */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden lg:flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(249,115,22,0.15)] border border-gray-700/50 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_100px_rgba(249,115,22,0.25)]">
                  {/* Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-rose-500/10 to-purple-500/10 rounded-[2rem] blur-3xl opacity-70 animate-pulse"></div>
                  
                  {/* Image Frame */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-[2rem] border border-white/10 overflow-hidden">
                    {/* Noise Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay">
                      <svg className="w-full h-full">
                        <filter id="noise">
                          <feTurbulence baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
                          <feComponentTransfer>
                            <feFuncA type="discrete" tableValues="0 .5"/>
                          </feComponentTransfer>
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noise)"/>
                      </svg>
                    </div>
                    
                    {/* Profile Image */}
                    <img
                      src="/my.png"
                      alt="Developer Portrait"
                      className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                    />
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Badges - Top Right */}
                <div className="absolute top-0 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image src="/tech-icons/reactjs.svg" alt="React" width={32} height={32} />
                </div>
                <div className="absolute top-40 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image src="/tech-icons/nextjs.svg" alt="Next.js" width={32} height={32} />
                </div>
               

                {/* Floating Badges - Bottom Left */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Image src="/tech-icons/mongodb.svg" alt="MongoDB" width={32} height={32} />
                </div>
                <div className="absolute top-10 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image src="/tech-icons/expressjs.svg" alt="Express.js" width={32} height={32} />
                </div>
                <div className="absolute bottom-40 -left-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image src="/tech-icons/nodejs.svg" alt="Node.js" width={32} height={32} />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-12 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute bottom-1/3 -right-12 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                {/* Floating Dots */}
                <div className="absolute top-20 -left-6 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-32 -right-6 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="py-16 px-4 lg:px-6"
      >
        <AnimatedSection delay={0.7}>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-orange-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-800/50 hover:border-orange-500/50 transition-all duration-500">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-500">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-1.5">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="py-20 px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Expertise & Specializations
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Delivering excellence across the full spectrum of modern web development
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <Card className="group relative overflow-hidden border-0 bg-gray-900/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10 text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl mb-6 mx-auto shadow-lg">
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-white">{skill.name}</CardTitle>
                    <div className="flex items-center justify-center gap-4 text-sm">
                      <Badge
                        variant="secondary"
                        className="bg-orange-800 text-orange-200"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 text-center">
                    <p className="text-gray-400">{skill.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        id="projects"
        className="py-20 px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900"
      >
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Showcasing innovative solutions that combine cutting-edge technology with exceptional user experience
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.2 * index}>
                <Card className={`group overflow-hidden border-0 bg-gray-900/70 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="lg:flex">
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-800 text-orange-200">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-orange-800 text-orange-200"
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
                          {project.githubUrl !== undefined && (
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
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        id="about"
        className="py-20 px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  About Me
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg text-gray-400 leading-relaxed">
                    I'm a passionate full-stack developer with over 2 years of experience crafting digital solutions that
                    make a difference. My journey began with a curiosity for how things work, which evolved into a deep
                    love for creating seamless user experiences.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    I specialize in modern web technologies and have a keen eye for design. When I'm not coding, you'll
                    find me exploring new frameworks, contributing to open-source projects, or mentoring aspiring
                    developers.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {["React", "Next.js", "TypeScript", "Node.js","Express.js","MongoDB", "Python"].map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-orange-500 text-white border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.4}>
                <div className="relative">
                  <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src="/my-nr.jpg" alt="Profile"  className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl"></div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl shadow-lg"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        id="contact"
        className="py-20 px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900"
      >
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Create Something Amazing</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'm always excited to work on innovative projects and collaborate with
              forward-thinking teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="mailto:ilyasfarkhane@gmail.com">Start a Project</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                <Link href="mailto:ilyasfarkhane@gmail.com">Say Hello</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="border-t border-gray-800 py-12 px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Ilyas FARKHANE. Crafted with passion and precision.
            </div>
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/ilyasfarkhane/"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/ilyasfarkhane-dev"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:ilyasfarkhane@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Back to Top Button */}
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          <ArrowUpRight className="h-6 w-6 rotate-[-45deg]" />
        </motion.button>
      )}
    </motion.div>
  )
}
