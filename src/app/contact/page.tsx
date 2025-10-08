"use client";

// --- FIX 1: Import the 'Variants' type ---
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  // --- FIX 2: Explicitly type the variants object ---
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-6 py-24 md:py-32">
        
        {/* --- Hero Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Whether you have a project idea, a question, or just want to connect, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* --- Interactive Contact Cards --- */}
            <motion.div variants={cardVariants} initial="hidden" animate="visible">
              <Card className="h-full flex flex-col justify-between hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-6 w-6" />
                    <span>Email Me</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">The best way to reach me for any inquiries.</p>
                  <a href="mailto:visheshkumarraghuvanshi@gmail.com">
                    <Button>
                      Send an Email <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
              <Card className="h-full flex flex-col justify-between hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Linkedin className="h-6 w-6" />
                    <span>Connect on Socials</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Follow my work and connect on a professional level.</p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/visheshraghuvanshi" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">LinkedIn</Button>
                    </a>
                    <a href="https://github.com/visheshraghuvanshi" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">GitHub</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* --- Contact Form Section --- */}
          <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Or Send a Message Directly</CardTitle>
                <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as I can.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
}