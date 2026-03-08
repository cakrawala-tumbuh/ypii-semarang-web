import { Flame, BarChart3, TreePine } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface MethodologyCard {
  icon: LucideIcon
  title: string
  description: string
}

const cards: MethodologyCard[] = [
  {
    icon: Flame,
    title: "Bebas Berekspresi, Berani Gagal",
    description:
      "Tidak ada ide yang salah. Ada keberanian yang ide-ide. Setiap percobaan adalah bagian dari proses belajar yang berharga. Ini bukan hanya yang menghasilkan kesuksesan. Ini sekadar yang mendorong potensi anak dengan sebuah karakter.",
  },
  {
    icon: BarChart3,
    title: "Struktur yang Membentuk Prestasi",
    description:
      "Setiap proyek memiliki target, timeline, dan evaluasi yang jelas. Kreativitas kembali bersatu tenaga aksi - hasil nyata yang bisa dilihat dan dirasakan.",
  },
  {
    icon: TreePine,
    title: "Alam sebagai Ruang Belajar",
    description:
      "Lingkungan hijau kami bukan hanya ruang praktik, bukan sekadar teori. Siswa belajar langsung dari alam, merangkul keragaman, dan memupuk ide-ide unik serta mereka sendiri.",
  },
]

export function MethodologySection() {
  return (
    <section className="px-6 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((card, i) => {
          const Icon = card.icon
          return (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl bg-tea-green p-6 md:p-8"
            >
              <div className="absolute right-4 top-4">
                <Icon className="h-5 w-5 text-oxblood" />
              </div>
              <h4 className="pr-8 text-lg font-bold text-foreground">
                {card.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {card.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
