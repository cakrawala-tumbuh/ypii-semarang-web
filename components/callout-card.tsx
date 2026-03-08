export function CalloutCard() {
  return (
    <section className="relative py-12 md:py-16">
      {/* 
        Wave background using top-wave.svg
      */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 -top-20 -bottom-20"
        style={{
          backgroundImage: 'url(/images/top-wave.svg)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

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
