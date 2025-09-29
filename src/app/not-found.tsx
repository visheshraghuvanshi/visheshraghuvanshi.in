"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/404-illustration.svg"
          alt="Person looking at a signpost, indicating they are lost"
          width={400}
          height={400}
          className="max-w-xs md:max-w-sm"
        />
      </motion.div>

      <motion.h1
        className="text-6xl md:text-8xl font-bold tracking-tighter mt-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Oops! It seems you've taken a wrong turn.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        className="mt-8"
      >
        <Link href="/">
          <Button size="lg">
            Go Back Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}