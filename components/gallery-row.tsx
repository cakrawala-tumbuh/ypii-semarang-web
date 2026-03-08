import Image from "next/image"

const images = [
  { src: "/images/gallery-1.jpg", alt: "Siswa bekerja sama dalam proyek tim" },
  {
    src: "/images/gallery-2.jpg",
    alt: "Siswa presentasi di depan kelas",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Siswa berkreasi dalam workshop",
  },
]

export function GalleryRow() {
  return (
    <section className="px-6 py-8 md:px-8 md:py-12 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-56 overflow-hidden rounded-2xl md:h-64 lg:h-72"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
