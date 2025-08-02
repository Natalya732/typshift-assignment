"use client";

import React from "react";
import { Header } from "@/shared/components/Header";
import { Hero } from "@/features/services/components/views/Hero";
import { PillarSection } from "@/features/services/components/views/PillarSection";
import { CTA } from "@/features/services/components/views/CTA";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Header />
      <Hero />
      <div className="relative">
        <PillarSection />
      </div>
      <CTA />
    </div>
  );
}
