"use client";

import Link from "next/link";
import { Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle"; // <-- Import the new component
import React from "react";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-lg">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold">Vishesh Kumar</span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <Button variant="ghost">{link.name}</Button>
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Link href="/resume" passHref>
              <Button>My Resume</Button>
            </Link>
            {/* --- Use the new component here --- */}
            <ThemeToggle />
          </div>
        </nav>

        {/* --- Mobile Navigation --- */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2 text-lg">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold">Vishesh Kumar</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <Separator className="my-4" />
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} passHref>
                    <Button variant="ghost" className="w-full justify-start text-lg">{link.name}</Button>
                  </Link>
                ))}
                <Link href="/resume" passHref>
                  <Button className="w-full text-lg">My Resume</Button>
                </Link>
                {/* Mobile theme toggle can be added here if needed, or keep it simple */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}