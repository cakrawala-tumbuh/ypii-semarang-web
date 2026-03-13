"use client"

import { useState } from "react"

import { TopBar } from "@/components/top-bar"
import { HeroSection } from "@/components/hero-section"
import { BelajarTerbaikSection } from "@/components/belajar-terbaik-section"
import { CalloutCard } from "@/components/callout-card"
import { GalleryRow } from "@/components/gallery-row"
import { CompetenciesSection } from "@/components/competencies-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { MethodologySection } from "@/components/methodology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FooterCta } from "@/components/footer-cta"
import { ContactUsDialog } from "@/components/contact-us-dialog"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />
      <BelajarTerbaikSection />
      <CalloutCard />
      <GalleryRow />
      <CompetenciesSection />
      <ShowcaseSection />
      <MethodologySection />
      <TestimonialsSection />
      <FooterCta onOpenContact={() => setIsContactOpen(true)} />
      <ContactUsDialog
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
      />
    </main>
  )
}
