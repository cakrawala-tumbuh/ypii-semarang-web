import Image from "next/image"

export function TopBar() {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 md:px-8 md:py-4">
      {/* Motto */}
      <p className="flex-1 text-center text-sm font-semibold tracking-[0.2em] text-oxblood sm:text-base md:text-lg">
        CERDAS - OTENTIK - IMAN - SOLIDER
      </p>
      {/* Logo */}
      <Image
        src="/images/ypii-logo.svg"
        alt="Logo YPII"
        width={131}
        height={40}
        className="h-8 w-auto shrink-0 sm:h-10 md:h-12"
        priority
      />
    </header>
  )
}
