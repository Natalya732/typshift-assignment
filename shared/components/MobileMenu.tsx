import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        className="p-2 rounded-md border border-border/50 dark:border-gray-700/50 bg-background/80 dark:bg-gray-900/80"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/95 dark:bg-gray-900/95 flex flex-col items-center justify-center gap-8"
          >
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
