import Image from "next/image"

type HeroSectionProps = {
  onOpenContact: () => void
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <div className="relative h-[500px] w-full md:h-[600px] lg:h-[700px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="SMA Kebon Dalem campus with traditional bamboo architecture"
          fill
          className="object-cover"
          priority
        />
        {/* Logo Badge */}
        <div className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full bg-oxblood md:h-20 md:w-20">
          <span className="text-center text-[10px] font-bold leading-tight text-primary-foreground md:text-xs">
            KDSG
          </span>
        </div>

        {/* Hero Text Box */}
        <div className="absolute bottom-12 left-0 md:bottom-16 md:left-8 lg:left-12">
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
          onClick={onOpenContact}
          className="rounded-full bg-oxblood px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:px-8 md:text-base"
        >
          DAFTAR PPDB 2025/2026
        </button>
        <a
          href="#hubungi"
          className="rounded-full bg-tea-green px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 md:px-8 md:text-base"
        >
          HUBUNGI KAMI
        </a>
      </div>
    </section>
  )
}
