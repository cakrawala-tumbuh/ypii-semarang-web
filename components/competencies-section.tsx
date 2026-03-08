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
    subtitle: "Mengubah Masalah Jadi Solusi Nyata",
    description:
      "Siswa dilatih berpikir kritis, meneliti, dan menemukan solusi dari tantangan dunia nyata.",
    icon: Brain,
  },
  {
    number: 2,
    title: "TEAMWORK",
    subtitle: "Kuat Bersama dalam Satu Tujuan",
    description:
      "Siswa belajar bekerja dalam tim, berbagi peran, dan mencapai hasil terbaik bersama.",
    icon: Users,
  },
  {
    number: 3,
    title: "PUBLIC SPEAKING",
    subtitle: "Ide Hebat, Disampaikan dengan Percaya Diri",
    description:
      "Siswa terlatih menyampaikan ide secara jelas, meyakinkan, dan profesional.",
    icon: Mic,
  },
  {
    number: 4,
    title: "ENTREPRENEURSHIP",
    subtitle: "Dari Ide Jadi Nilai & Dampak",
    description:
      "Siswa memahami bisnis dari praktik langsung, dari perencanaan hingga penjualan.",
    icon: Lightbulb,
  },
  {
    number: 5,
    title: "CREATIVITY",
    subtitle: "Berani Berbeda, Siap Berinovasi",
    description:
      "Siswa didorong untuk berpikir kreatif, bereksperimen, dan menciptakan solusi orisinal.",
    icon: Palette,
  },
  {
    number: 6,
    title: "HOLISTIC",
    subtitle: "Cerdas, Berkarakter, dan Peduli",
    description:
      "Pendidikan menyeluruh yang menumbuhkan iman, empati, dan tanggung jawab pada diri dan sesama.",
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
