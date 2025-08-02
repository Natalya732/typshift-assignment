import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/components/Button";
import { BackgroundCTAAnimations } from "../common/BackgroundCtaAnimations";
import { ctaAnimations } from "@/features/services/constants/animations";

const features = [
  {
    title: "Free Consultation",
    desc: "No obligation, just great advice",
    icon: "💬",
  },
  {
    title: "Fast Response",
    desc: "Get back to you within 24 hours",
    icon: "⚡",
  },
  {
    title: "Flexible Pricing",
    desc: "Solutions that fit your budget",
    icon: "💰",
  },
];

const results = [
  {
    icon: "⭐",
    label: "4.9/5 Client Rating",
  },
  {
    icon: "🚀",
    label: "100+ Projects Delivered",
  },
  {
    icon: "🔒",
    label: "NDA Protected",
  },
];

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      <BackgroundCTAAnimations />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          variants={ctaAnimations.containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-white space-y-10 lg:space-y-12 max-w-5xl mx-auto px-4 sm:px-6"
        >
          <motion.div
            variants={ctaAnimations.itemVariants}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                business?
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto">
              Let's discuss your project and create something amazing together.{" "}
              <span className="font-medium text-white">Our team is ready</span>{" "}
              to bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            variants={ctaAnimations.itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 hover:shadow-xl hover:shadow-white/25 transition-all duration-300 w-full sm:w-auto font-semibold"
              >
                Start Your Project
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto font-semibold"
              >
                Schedule a Call
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={ctaAnimations.itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-16 pt-16 border-t border-white/20"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={ctaAnimations.itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </div>
                <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                  {feature.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={ctaAnimations.itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 text-white/70"
          >
            {results.map((result) => (
              <div className="flex items-center gap-2" key={result.label}>
                <span className="text-2xl">{result.icon}</span>
                <span className="font-medium">{result.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
