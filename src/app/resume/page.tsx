"use client";

import { motion, Variants } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Github, Download } from "lucide-react";

export default function ResumePage() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = ["Java", "JavaScript", "PHP", "SQL", "Spring Boot", "React", "MySQL", "HTML5", "CSS3", "Tailwind", "Git & GitHub"];

  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">VISHESH KUMAR</h1>
          </div>
          
          <a href="/Vishesh_Resume.pdf" download="Vishesh_Kumar_Resume.pdf">
            <Button className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>

        <div className="space-y-8">

          {/* This section animates instantly on load */}
          <motion.section 
            variants={sectionVariants} 
            initial="hidden" 
            animate="visible" 
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
                <a href="mailto:visheshkumarraghuvanshi@gmail.com" className="flex items-center gap-3 group">
                  <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>visheshkumarraghuvanshi@gmail.com</span>
                </a>
                <a href="tel:+918989202147" className="flex items-center gap-3 group">
                  <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>+918989202147</span>
                </a>
                <a href="https://www.visheshraghuvanshi.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <Globe className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>www.visheshraghuvanshi.in</span>
                </a>
                <a href="https://github.com/visheshraghuvanshi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>github.com/visheshraghuvanshi</span>
                </a>
              </CardContent>
            </Card>
          </motion.section>

          {/* This section animates with a slight delay */}
          <motion.section 
            variants={sectionVariants} 
            initial="hidden" 
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>A summary of my key technical projects.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold">Personal Expense Tracker</h3>
                  <p className="text-sm text-muted-foreground italic mt-1">A web application to manage and analyze personal expenses with real-time insights.</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 text-sm">
                    <li>Developed a full-stack Spring Boot + MySQL application.</li>
                    <li>Implemented JWT-based authentication for secure login.</li>
                    <li>Created a dashboard with monthly and category-wise reports.</li>
                  </ul>
                </div>
                <div className="pt-6 border-t">
                  <h3 className="font-semibold">Excellence Study</h3>
                  <p className="text-sm text-muted-foreground italic mt-1">An all-in-one online learning platform with dynamic content.</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 text-sm">
                    <li>Designed a full-stack learning platform using React, Firebase, and GraphQL.</li>
                    <li>Implemented GraphQL APIs to fetch real-time articles from Hashnode.</li>
                  </ul>
                </div>
                 <div className="pt-6 border-t">
                  <h3 className="font-semibold">Doubt Solving Portal (DSP)</h3>
                   <p className="text-sm text-muted-foreground italic mt-1">A Q&A portal for collaborative learning between students and faculty.</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 text-sm">
                    <li>Built a Q&A portal using PHP & MySQL.</li>
                    <li>Developed a user-friendly interface for real-time doubt resolution.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.section>
          
          {/* This section animates with a further delay */}
          <motion.section 
            variants={sectionVariants} 
            initial="hidden" 
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <Card>
              <CardHeader><CardTitle>Skills</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* This section animates last */}
          <motion.section 
            variants={sectionVariants} 
            initial="hidden" 
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <Card>
              <CardHeader><CardTitle>Education</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">B.Tech, Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Sushila Devi Bansal College of Engineering, Indore (Graduated: July 2024)</p>
                  <p className="text-sm">CGPA: 8.15</p>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="font-semibold">Class XII</h3>
                  <p className="text-sm text-muted-foreground">Kendriya Vidyalaya Mhow (2020)</p>
                  <p className="text-sm">Percentage: 87.4%</p>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="font-semibold">Class X</h3>
                  <p className="text-sm text-muted-foreground">Kendriya Vidyalaya Mhow (2018)</p>
                  <p className="text-sm">Percentage: 81.8%</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </div>
    </div>
  );
}