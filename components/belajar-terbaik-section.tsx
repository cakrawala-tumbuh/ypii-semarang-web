import Image from "next/image"
import { Check } from "lucide-react"

const bulletPoints = [
  "Bagaimana jika belajar tidak hanya duduk dan mendengar?",
  "Matematika dipelajari lewat menghitung keuntungan produk buatan sendiri.",
  "Biologi dipahami dengan mengolah limbah menjadi karya bernilai.",
]

export function BelajarTerbaikSection() {
  return (
    <section className="px-6 py-12 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-oxblood italic">Belajar</span>{" "}
            <span className="text-foreground">Terbaik</span>
          </h2>

          <ul className="mt-6 flex flex-col gap-3">
            {bulletPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-oxblood">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </span>
                <span className="text-sm leading-relaxed text-foreground md:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Di SMA Kebon Dalem, kami percaya pembelajaran paling bermakna
              terjadi saat siswa mengalami langsung. Melalui project-based
              learning yang dekat dengan alam dan masalah nyata, siswa tidak
              hanya mengejar nilai, tetapi membangun skill hidup yang akan
              mereka gunakan selamanya.
            </p>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="relative flex flex-1 gap-4">
          <div className="relative h-64 flex-1 overflow-hidden rounded-2xl md:h-80">
            <Image
              src="/images/students-1.jpg"
              alt="Siswa belajar di alam terbuka"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 h-64 flex-1 overflow-hidden rounded-2xl md:h-80">
            <Image
              src="/images/students-2.jpg"
              alt="Siswa bereksperimen dengan proyek"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
