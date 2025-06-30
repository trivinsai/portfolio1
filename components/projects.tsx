"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "#",
    live: "#",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Framer Motion"],
    github: "#",
    live: "#",
    gradient: "from-green-500 to-blue-500",
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chatbot application powered by OpenAI's GPT API with conversation history and context awareness.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    github: "#",
    live: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Vue.js", "Express", "Weather API", "Chart.js", "Mapbox"],
    github: "#",
    live: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Social Media Platform",
    description:
      "A modern social networking platform with real-time messaging, media sharing, and advanced privacy controls.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React Native", "Firebase", "Node.js", "GraphQL", "AWS"],
    github: "#",
    live: "#",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Portfolio Website",
    description:
      "A stunning portfolio website with smooth animations, dark mode, and responsive design showcasing creative work.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">A showcase of my recent work and creative solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                />
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-gray-700/50 backdrop-blur-sm border border-white/10 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
