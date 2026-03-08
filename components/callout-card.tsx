export function CalloutCard() {
  return (
    <section className="relative py-12 md:py-16">
      {/* 
        Large organic SVG blob — positioned absolutely behind the card (z-0).
        Starts from the middle-left, sweeps broadly behind the card,
        and flows diagonally down-right to bridge into the gallery below.
        Uses overflow-visible so the shape can extend beyond the section bounds.
      */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
        <svg
          className="absolute -top-24 -bottom-32 left-0 h-[calc(100%+14rem)] w-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer soft glow layer — wider, more expansive */}
          <path
            d="
              M-40,260
              C60,120 220,80 420,110
              C620,140 780,60 980,90
              C1180,120 1340,80 1500,180
              L1500,520
              C1380,620 1180,540 980,570
              C780,600 580,680 380,620
              C180,560 40,640 -40,560
              Z
            "
            fill="#DAEFB3"
            opacity="0.45"
          />
          {/* Main organic blob — sweeps from mid-left behind the card, 
              flowing diagonally down to the right */}
          <path
            d="
              M-20,300
              C80,180 260,140 440,170
              C620,200 760,100 960,140
              C1160,180 1320,120 1480,210
              L1480,490
              C1360,580 1140,500 940,530
              C740,560 540,640 340,580
              C140,520 20,600 -20,520
              Z
            "
            fill="#DAEFB3"
          />
        </svg>
      </div>

      {/* Card content — foreground, z-10 to overlap the wave */}
      <div className="relative z-10 px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-2xl bg-oxblood px-8 py-10 md:px-12 md:py-14">
          <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
            Bukan Cuma Belajar, Tetapi Tumbuh.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            Setiap proyek di SMA Kebon Dalem dirancang untuk melatih kompetensi
            inti yang akan menentukan kesuksesan anak di masa depan&mdash;bukan
            sekadar nilai rapor.
          </p>
        </div>
      </div>
    </section>
  )
}
