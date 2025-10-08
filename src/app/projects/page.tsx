"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // --- Updated projects data to include liveUrl ---
  const projects = [
    {
      title: "Personal Expense Tracker",
      description: "A web application to manage and analyze personal expenses with real-time insights.",
      tags: ["Spring Boot", "MySQL", "Java", "JWT"],
      imageUrl: "/project-placeholder.png",
      githubUrl: "#", // Add your GitHub link
      liveUrl: "#",
    },
    {
      title: "Excellence Study",
      description: "An all-in-one online learning platform providing educational resources including articles, courses, and videos.",
      tags: ["React", "Firebase", "GraphQL", "Hashnode API"],
      imageUrl: "/projects/excellencestudy.png",
      githubUrl: "https://github.com/visheshraghuvanshi/excellence-study-backend",
      liveUrl: "https://courses-excellencestudy.vercel.app/", 
    },
    {
      title: "Doubt Solving Portal (DSP)",
      description: "A web application enabling students to ask questions, get faculty responses, and engage in collaborative learning.",
      tags: ["PHP", "MySQL", "Collaborative Learning"],
      imageUrl: "/projects/dsp.png",
      githubUrl: "https://github.com/visheshraghuvanshi/dsp",
      liveUrl: "https://dsp.page.gd/index.php",
    },
    // Add more projects here if you have them
  ];
  
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-6 py-24 md:py-32">

        {/* --- Page Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide mb-4">My Work</h1>
          <p className="text-lg text-muted-foreground">
            A collection of my projects that demonstrate my skills in turning ideas into functional and user-friendly applications.
          </p>
        </motion.div>

        {/* --- Projects Grid --- */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
