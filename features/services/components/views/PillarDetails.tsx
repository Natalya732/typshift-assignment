import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PILLARS } from "@/features/services/constants/pillars";
import { pillarDetailsAnimations } from "@/features/services/constants/animations";

interface PillarDetailsProps {
  selectedPillar: string;
}

export function PillarDetails({ selectedPillar }: PillarDetailsProps) {
  const pillar = PILLARS.find((p) => p.id === selectedPillar);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (!pillar) return null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit={{ opacity: 0 }}
      variants={pillarDetailsAnimations.containerVariants}
      className="space-y-8 sm:space-y-12 mt-8 sm:mt-6 px-4 sm:px-0 relative z-10"
    >
      <motion.div
        variants={pillarDetailsAnimations.itemVariants}
        className="text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-semibold text-foreground leading-tight">
          {pillar.title}
        </h3>
        <p className="mt-3 sm:mt-2 text-muted-foreground font-secondary text-sm sm:text-base leading-relaxed px-2 sm:px-0">
          {pillar.description}
        </p>
      </motion.div>

      <motion.div
        variants={pillarDetailsAnimations.containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
      >
        {pillar.categories.map((category, index) => (
          <motion.div
            key={index}
            variants={pillarDetailsAnimations.itemVariants}
            className="space-y-3"
          >
            <h4 className="text-lg sm:text-xl font-medium font-primary text-primary px-2 sm:px-0">
              {category.title}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {category.services.map((service, i) => (
                <motion.li
                  key={i}
                  className="p-5 rounded-lg border border-border bg-card text-card-foreground shadow-sm hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 hover:ring hover:ring-primary/30 cursor-default transition-transform duration-200 ease-in-out"
                >
                  <h5 className="font-semibold font-primary text-base">
                    {service.name}
                  </h5>
                  <p className="text-sm text-muted-foreground font-secondary mt-1">
                    {service.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
