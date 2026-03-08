import Image from "next/image"
import { BookOpen } from "lucide-react"

export function ShowcaseSection() {
  return (
    <section className="py-12 md:py-16">
      {/* Full-width image */}
      <div className="w-full">
        <Image
          src="/images/showcase.jpg"
          alt="Siswa memasak bersama sebagai proyek sekolah"
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>

      {/* Title and text */}
      <div className="px-6 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold leading-tight text-oxblood md:text-3xl lg:text-4xl">
            BAGAIMANA KULIT PISANG MENGAJARKAN LEBIH BANYAK DARIPADA TEXTBOOK
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Lihat langsung bagaimana siswa kami mengubah sampai jadi produk yang
            laku &mdash; dan skill apa yang mereka dapat dari prosesnya.
          </p>
        </div>
      </div>

      {/* Highlight box */}
      <div className="px-6 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-4xl items-center gap-4 rounded-2xl bg-tea-green px-6 py-5 md:px-8 md:py-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oxblood">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <p className="text-sm font-medium leading-relaxed text-foreground md:text-base">
            Ini bukan dongeng. Ini project nyata yang mengajarkan critical
            thinking, teamwork, public speaking, dan entrepreneurship dalam satu
            journey.
          </p>
        </div>
      </div>
    </section>
  )
}
