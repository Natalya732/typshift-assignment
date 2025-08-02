"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function SimpleThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-muted/50 dark:bg-gray-800/50 border border-border/50 dark:border-gray-700/50 hover:bg-muted dark:hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="text-lg"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </motion.button>
  );
}
