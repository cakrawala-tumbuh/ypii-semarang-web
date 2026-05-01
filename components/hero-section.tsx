import Image from "next/image"

import { trackMatomoEvent } from "@/lib/matomo"

type HeroSectionProps = {
  onOpenContact: () => void
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <div className="relative h-[620px] w-full md:h-[720px] lg:h-[820px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="SMA Kebon Dalem campus with traditional bamboo architecture"
          fill
          className="object-cover"
          priority
        />

        {/* Hero Text Box */}
        <div className="absolute top-0 left-0 md:top-8 md:left-8 lg:left-12">
          <div className="bg-oxblood px-6 py-6 md:rounded-lg md:px-10 md:py-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                  EXPLORE
                </span>
                <span className="text-2xl font-bold text-primary-foreground/60 md:text-4xl lg:text-5xl">
                  YOURSELF
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                  KNOW
                </span>
                <span className="text-2xl font-bold text-primary-foreground/60 md:text-4xl lg:text-5xl">
                  YOUR POTENTIAL
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                  UNLOCK
                </span>
                <span className="text-2xl font-bold text-primary-foreground/60 md:text-4xl lg:text-5xl">
                  THE NEXT LEVEL
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/90 md:text-base">
              Belajar bukan tentang menghafal. Ini tentang mengalami,
              bereksperimen, dan menemukan siapa diri Anda sebenarnya.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center gap-3 px-6 py-6">
        <button
          type="button"
          onClick={() => {
            trackMatomoEvent({
              category: "PPDB",
              action: "click",
              name: "hero_daftar_ppdb",
            })
            onOpenContact()
          }}
          className="rounded-full bg-oxblood px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:px-8 md:text-base"
        >
          DAFTAR PPDB 2025/2026
        </button>
        <a
          href="https://wa.me/628135955840"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackMatomoEvent({
              category: "Hubungi Kami",
              action: "click",
              name: "hero_hubungi_kami",
            })
          }
          className="rounded-full bg-tea-green px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 md:px-8 md:text-base"
        >
          HUBUNGI KAMI
        </a>
      </div>
    </section>
  )
}
