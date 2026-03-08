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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <HeroSection />
      <BelajarTerbaikSection />
      <CalloutCard />
      <GalleryRow />
      <CompetenciesSection />
      <ShowcaseSection />
      <MethodologySection />
      <TestimonialsSection />
      <FooterCta />
    </main>
  )
}
