import { Instagram, MessageCircle } from "lucide-react"

export function FooterCta() {
  return (
    <footer id="daftar">
      {/* PPDB CTA section */}
      <section className="px-6 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-foreground">PPDB 2025/2026</span>
            <br />
            <span className="text-oxblood">SUDAH DIBUKA</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Apakah Anda ingin anak Anda hanya pintar menghafal atau siap
            menghadapi dunia nyata?
          </p>

          {/* CTA rows */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <a
                href="#daftar"
                className="shrink-0 rounded-full bg-oxblood px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:px-8 md:text-base"
              >
                DAFTAR PPDB
              </a>
              <p className="text-sm text-muted-foreground md:text-base">
                Isi form di bawah, tim kami akan menghubungi dalam 1x24 jam
              </p>
            </div>
            <div id="hubungi" className="flex items-center gap-4">
              <a
                href="#hubungi"
                className="shrink-0 rounded-full bg-tea-green px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 md:px-8 md:text-base"
              >
                HUBUNGI KAMI
              </a>
              <p className="text-sm text-muted-foreground md:text-base">
                Lihat langsung fasilitas, bertemu guru, dan rasakan atmosfer
                pembelajaran kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer bottom with sweeping organic wave */}
      <div className="relative mt-8">
        {/* Full-width SVG wave sweeping from bottom-left to top-right */}
        <svg
          className="block w-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back layer - softer, broader sweep */}
          <path
            d="M0,100 C80,80 200,180 400,160 C600,140 800,60 1000,80 C1200,100 1350,40 1440,30 L1440,300 L0,300 Z"
            fill="#DAEFB3"
            opacity="0.5"
          />
          {/* Main wave - dynamic sweep from bottom-left curving to top-right */}
          <path
            d="M0,180 C100,140 250,220 450,180 C650,140 850,80 1050,100 C1200,115 1350,60 1440,50 L1440,300 L0,300 Z"
            fill="#DAEFB3"
          />
        </svg>

        {/* Footer content positioned inside the thickest part of the wave (bottom) */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-6 pb-6 pt-4 md:px-8 md:pb-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.15em] text-oxblood md:text-sm">
            CERDAS - OTENTIK - IMAN - SOLIDER
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-oxblood text-oxblood transition-colors hover:bg-oxblood hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-oxblood text-oxblood transition-colors hover:bg-oxblood hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
