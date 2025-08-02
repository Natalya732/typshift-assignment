"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { SimpleThemeToggle } from "./ThemeToggle";
import { TypeShiftLogo } from "./svgs";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/50 dark:border-gray-700/50 bg-background/80 dark:bg-gray-900/80 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="font-semibold font-secondary text-xl">
              type<i>SHIFT</i>
            </Link>

            <TypeShiftLogo />
          </motion.div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="/services"
                className="text-sm font-medium text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-colors"
              >
                Services
              </a>
              <a className="text-sm font-medium text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-colors">
                About
              </a>
              <a className="text-sm font-medium text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-colors">
                Contact
              </a>
            </nav>
            <SimpleThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
