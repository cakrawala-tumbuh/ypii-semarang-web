import {
  Brain,
  Users,
  Mic,
  Lightbulb,
  Palette,
  Heart,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Competency {
  number: number
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
}

const competencies: Competency[] = [
  {
    number: 1,
    title: "CRITICAL THINKING",
    subtitle: "Cerdas Menalar: Jawaban Nyata untuk Masalah Nyata",
    description:
      "Anak Anda dilatih berpikir kritis, menimbang informasi secara bertanggung jawab, dan menemukan solusi dari tantangan dunia nyata — bukan sekadar menghafal, tetapi sungguh-sungguh memahami.",
    icon: Brain,
  },
  {
    number: 2,
    title: "TEAMWORK",
    subtitle: "Solider Bersama: Kepedulian yang Menggerakkan",
    description:
      "Anak Anda belajar bekerja dalam tim dengan semangat solidaritas sejati — mendengarkan, berbagi peran, dan mencapai hasil terbaik karena benar-benar peduli satu sama lain.",
    icon: Users,
  },
  {
    number: 3,
    title: "PUBLIC SPEAKING",
    subtitle: "Otentik dan Berani Tampil: Suaramu Berharga",
    description:
      "Anak Anda dilatih menyampaikan gagasan dengan jelas dan meyakinkan — percaya pada nilai dirinya sendiri dan berani bersuara di depan banyak orang, bukan karena terpaksa, tetapi karena tahu suaranya bermakna.",
    icon: Mic,
  },
  {
    number: 4,
    title: "ENTREPRENEURSHIP",
    subtitle: "Cerdas Berkreasi: Dari Ide Kecil Jadi Dampak Besar",
    description:
      "Anak Anda belajar menghidupkan kreativitasnya menjadi aksi nyata — dari inisiatif, perencanaan, hingga eksekusi yang memberi dampak bagi dirinya dan orang-orang di sekitarnya.",
    icon: Lightbulb,
  },
  {
    number: 5,
    title: "CREATIVITY",
    subtitle: "Otentik Berkarya: Berani Berbeda, Bebas Berinovasi",
    description:
      "Anak Anda didorong mengeksplorasi ide-ide unik dan menciptakan solusi orisinal — merayakan kekhasan dirinya sebagai kekuatan, bukan kelemahan.",
    icon: Palette,
  },
  {
    number: 6,
    title: "COMPASSIONATE",
    subtitle: "Hidup Solider dari Iman yang Hidup akan Penyelenggaraan Ilahi: Berakar, Bergerak, Berbagi",
    description:
      "Anak Anda tumbuh sebagai pribadi yang berakar dalam keyakinan akan Penyelenggaraan Ilahi — percaya hidupnya disertai Tuhan, dan dari iman yang hidup itulah lahir kepedulian nyata bagi sesama, komunitas, dan alam semesta.",
    icon: Heart,
  },
]

export function CompetenciesSection() {
  return (
    <section className="px-6 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        {competencies.map((comp) => {
          const Icon = comp.icon
          return (
            <div key={comp.number} className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-oxblood">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-foreground md:text-lg">
                  {comp.number}. {comp.title}
                </h4>
                <p className="text-sm font-semibold text-oxblood md:text-base">
                  {comp.subtitle}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {comp.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
