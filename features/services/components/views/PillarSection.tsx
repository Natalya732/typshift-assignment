import React, { useState, useRef, JSX } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Container } from "@/shared/components/Container";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/Tabs";
import { PILLARS } from "@/features/services/constants/pillars";
import { PillarDetails } from "./PillarDetails";
import { pillarSelectorAnimations } from "@/features/services/constants/animations";
import { FiGlobe, FiFeather, FiDollarSign, FiUser } from "react-icons/fi";

const pillarIcons: Record<string, JSX.Element> = {
  web: <FiGlobe size={20} className="sm:w-6 sm:h-6" />,
  creative: <FiFeather size={20} className="sm:w-6 sm:h-6" />,
  paidMedia: <FiDollarSign size={20} className="sm:w-6 sm:h-6" />,
  personalBranding: <FiUser size={20} className="sm:w-6 sm:h-6" />,
};

export function PillarSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [selectedPillar, setSelectedPillar] = useState(PILLARS[0].id);

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 bg-background text-foreground">
      <Container>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={pillarSelectorAnimations.title}
          className="text-center mb-10 sm:mb-14 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold tracking-tight leading-tight">
            Our 4 Specialized Teams
          </h2>
        </motion.div>

        <div className="px-4 sm:px-0 mb-8 sm:mb-12">
          <Tabs value={selectedPillar} onValueChange={setSelectedPillar}>
            <TabsList
              className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-5 w-full mx-auto rounded-xl sm:rounded-2xl h-full p-3 sm:px-4 sm:py-3 relative"
            >
              {PILLARS.map((pillar) => (
                <TabsTrigger
                  key={pillar.id}
                  value={pillar.id}
                  className="flex flex-row sm:flex-col items-center justify-start sm:justify-center w-full  rounded-lg transition-all duration-200 text-muted-foreground hover:bg-accent/20 data-[state=active]:bg-primary min-h-[48px]"
                >
                  <span className="mr-3 sm:mr-0 sm:mb-2 flex-shrink-0">
                    {pillarIcons[pillar.id]}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-left sm:text-center font-primary leading-tight">
                    {pillar.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <AnimatePresence mode="wait">
          <PillarDetails key={selectedPillar} selectedPillar={selectedPillar} />
        </AnimatePresence>
      </Container>
    </section>
  );
}