import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/shared/components/Container";
import { heroAnimations } from "@/features/services/constants/animations";
import { BackgroundHeroAnimations } from "../common/BackgroundHeroAnimations";
import Link from "next/link";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-10 lg:py-20 bg-background dark:bg-gray-900 relative overflow-hidden">
      <BackgroundHeroAnimations />
      <Container>
        <motion.div
          ref={ref}
          variants={heroAnimations.containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          <motion.div variants={heroAnimations.itemVariants}>
            <div className="text-sm font-semibold text-primary dark:text-primary uppercase tracking-wider mb-4">
              Four Pillars. One Performance System.
            </div>
          </motion.div>

          <motion.div variants={heroAnimations.itemVariants}>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground dark:text-white leading-tight">
              Everything we do rolls up to outcomes:{" "}
              <span className="text-primary dark:text-primary font-secondary">
                growth
              </span>
              ,{" "}
              <span className="text-primary dark:text-primary font-secondary">
                efficiency
              </span>
              , and{" "}
              <span className="text-primary dark:text-primary font-secondary">
                brand equity
              </span>
              .
            </h1>
          </motion.div>

          <motion.div variants={heroAnimations.itemVariants}>
            <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our specialized teams work together to deliver comprehensive
              digital solutions that drive measurable results for your business.
            </p>
          </motion.div>

          <motion.div variants={heroAnimations.itemVariants}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link href={"#services"}>
                <button className=" cursor-pointer group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 w-full sm:w-auto">
                  <span className="relative z-10">Explore Our Services</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              <button className="cursor-pointer group px-8 py-4 border-2 border-border text-foreground rounded-full font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/5 w-full sm:w-auto">
                View Case Studies
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
