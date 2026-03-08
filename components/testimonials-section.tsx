import { Quote } from "lucide-react"

interface Testimonial {
  label: string
  quote: string
  author: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    label: "Testimoni Orang Tua",
    quote:
      "\"Anak saya dulu pendiam, susah ngomong di depan orang. Setelah setahun di Kebon Dalem jadi nggak malu-malu lagi. Dia sekarang bisa presentasi di depan puluhan orang, itu growth-nya nggak main-main.\"",
    author: "Bu Maria, Orang Tua Siswa kelas 11",
    date: "",
  },
  {
    label: "Testimoni Alumni",
    quote:
      "\"Skill yang gue dapet dari project di SMA ini - critical thinking, public speaking, teamwork - itu semua kepake banget di kuliah dan kerja. Banyak temen gue yang pinter tapi ga bisa kerja tim atau ga punya gowerness. Gue grateful banget dilatih dari SMA.\"",
    author: "",
    date: "Alumni 2023",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 py-12 md:px-8 md:py-16 lg:px-12">
      {/* Top quote */}
      <p className="mx-auto max-w-2xl text-center text-sm italic text-muted-foreground md:text-base">
        {'"Wild enough to inspire. Structured enough to deliver results."'}
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative flex flex-col rounded-2xl bg-beige p-6 md:p-8"
          >
            {/* Top-left quote icon */}
            <Quote className="mb-4 h-8 w-8 text-oxblood" />

            <h4 className="text-lg font-bold text-oxblood">{t.label}</h4>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground md:text-base">
              {t.quote}
            </p>

            <div className="mt-4 flex items-end justify-between">
              {t.author && (
                <p className="text-xs text-muted-foreground md:text-sm">
                  &mdash; {t.author}
                </p>
              )}
              {t.date && (
                <p className="text-xs font-medium text-oxblood md:text-sm">
                  {t.date}
                </p>
              )}
            </div>

            {/* Bottom-right quote icon */}
            <Quote className="absolute bottom-4 right-4 h-8 w-8 rotate-180 text-oxblood/30" />
          </div>
        ))}
      </div>
    </section>
  )
}
