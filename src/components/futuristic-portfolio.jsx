"use client";
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter, Zap } from "lucide-react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Quantum AI Assistant", description: "Next-gen AI powered by quantum algorithms", image: "https://picsum.photos/seed/quantum/400/300", github: "#", demo: "#" },
  { id: 2, title: "Holographic UI Kit", description: "Create stunning 3D interfaces with ease", image: "https://picsum.photos/seed/hologram/400/300", github: "#", demo: "#" },
  { id: 3, title: "NeuroSync Platform", description: "Brain-computer interface for seamless interactions", image: "https://picsum.photos/seed/neurosync/400/300", github: "#", demo: "#" },
]

const skills = [
  { name: "Quantum Computing", level: 90 },
  { name: "Neural Interfaces", level: 85 },
  { name: "Holographic UIs", level: 80 },
  { name: "AI Integration", level: 75 },
  { name: "Blockchain Systems", level: 70 },
]

const blogPosts = [
  { id: 1, title: "The Rise of Quantum Web Development", excerpt: "Exploring how quantum computing is revolutionizing web technologies...", date: "2024-03-15" },
  { id: 2, title: "Neuro-Responsive Design Patterns", excerpt: "Creating user interfaces that adapt to brainwave patterns...", date: "2024-03-10" },
  { id: 3, title: "Holographic Data Visualization in Web Apps", excerpt: "Implementing 3D holographic displays for complex data sets...", date: "2024-03-05" },
]

export function FuturisticPortfolioComponent() {
  const [activeSection, setActiveSection] = useState("home")
  const controls = useAnimation()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  return (
    (<div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }} />
      <div className="relative z-10">
        <header
          className="p-4 md:p-6 backdrop-blur-xl bg-black/30 sticky top-0 z-20 border-b border-blue-500/20">
          <nav className="container mx-auto flex justify-between items-center">
            <motion.h1
              className="text-2xl md:text-3xl font-bold flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}>
              <Zap className="mr-2 text-blue-400" />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Hariom Jha
              </span>
            </motion.h1>
            <ul className="flex space-x-4">
              {["Home", "About", "Projects", "Skills", "Blog", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className={`text-sm md:text-base ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white'} hover:text-blue-400 transition-colors`}>
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-4 md:p-6">
          <AnimatePresence mode="wait">
            {activeSection === "home" && (
              <motion.section
                key="home"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center relative">
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  variants={glowVariants}
                  initial="hidden"
                  animate="visible">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
                </motion.div>
                <Avatar
                  className="w-40 h-40 mb-8 ring-2 ring-blue-500 ring-offset-4 ring-offset-black">
                  <AvatarImage src={"./profile.jpg"} />
                  <AvatarFallback>JQ</AvatarFallback>
                </Avatar>
                <motion.h2
                  className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}>
                  Hariom Jha
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl text-blue-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}>
                  Quantum Full-Stack Developer
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}>
                  <Button
                    onClick={() => setActiveSection("contact")}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    Initiate Contact
                  </Button>
                </motion.div>
              </motion.section>
            )}

            {activeSection === "about" && (
              <motion.section
                key="about"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-4xl mx-auto">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">About Me</h2>
                <motion.p
                  className="text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}>
                  I&apos;m a quantum full-stack developer with expertise in merging cutting-edge web technologies with quantum computing principles. My mission is to push the boundaries of what&apos;s possible in web development, creating immersive and hyper-efficient digital experiences.
                </motion.p>
                <motion.p
                  className="text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}>
                  When I&apos;m not coding in multiple dimensions, I&apos;m exploring the frontiers of neural interfaces and contributing to open-source quantum projects that aim to revolutionize the digital landscape.
                </motion.p>
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}>
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                    Download Quantum CV
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                    View Multiversal GitHub
                  </Button>
                </motion.div>
              </motion.section>
            )}

            {activeSection === "projects" && (
              <motion.section
                key="projects"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Quantum Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      <Card
                        className="bg-black/50 backdrop-blur-xl border-blue-500/20 overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group">
                        <CardHeader className="p-0">
                          <div className="relative overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <CardTitle
                            className="text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">{project.title}</CardTitle>
                          <CardDescription className="text-gray-300">{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-4 flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">Quantum Repo</a>
                          </Button>
                          <Button
                            size="sm"
                            asChild
                            className="bg-purple-600 hover:bg-purple-700 text-white">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">Holographic Demo</a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeSection === "skills" && (
              <motion.section
                key="skills"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Quantum Skills</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      <div className="mb-2 flex justify-between items-center">
                        <span className="text-lg font-semibold">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-600" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeSection  === "blog" && (
              <motion.section
                key="blog"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Quantum Insights</h2>
                <div className="space-y-8">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      <Card
                        className="bg-black/50 backdrop-blur-xl border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                        <CardHeader>
                          <CardTitle
                            className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">{post.title}</CardTitle>
                          <CardDescription className="text-gray-400">{post.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">Read Full Transmission</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeSection === "contact" && (
              <motion.section
                key="contact"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-xl mx-auto">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Quantum Communication</h2>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Designation"
                    className="bg-black/50 border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400" />
                  <Input
                    type="email"
                    placeholder="Your Quantum Email"
                    className="bg-black/50 border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400" />
                  <Input
                    type="text"
                    placeholder="Transmission Subject"
                    className="bg-black/50 border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400" />
                  <Textarea
                    placeholder="Your Quantum Message"
                    className="bg-black/50 border-blue-500/20 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400" />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                    Transmit Message
                  </Button>
                </form>
                <div className="mt-8 flex justify-center space-x-6">
                  {[Github, Linkedin, Twitter].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-400 hover:text-purple-400 transition-colors">
                      <Icon className="w-8 h-8" />
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-12 p-4 md:p-6 bg-black/30 border-t border-blue-500/20">
          <div className="container mx-auto text-center text-gray-400">
            <p>&copy; 2024 Hariom Jha. All rights reserved across the multiverse.</p>
          </div>
        </footer>
      </div>
    </div>)
  );
}