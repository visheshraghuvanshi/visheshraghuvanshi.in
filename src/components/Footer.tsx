// src/components/Footer.tsx

import Link from "next/link";
import { Button } from "./ui/button";
import { Code, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/visheshraghuvanshi", icon: <Github /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/visheshraghuvanshi", icon: <Linkedin /> },
    { name: "Twitter", href: "https://x.com/VisheshByte", icon: <Twitter /> },
  ];

  return (
    <footer className="bg-secondary/50">
      {/* --- Top Section: Call to Action --- */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Have a project in mind or an opportunity to discuss? I&apos;m always open to connecting.
          </p>
          <Link href="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
        </div>
      </div>

      {/* --- Bottom Section: Links & Copyright --- */}
      <div className="border-t">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Vishesh Kumar</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} passHref>
                  <Button variant="ghost">{link.name}</Button>
                </Link>
              ))}
            </nav>

            <div className="flex gap-2">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    {link.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Vishesh Kumar. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}