import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.png" alt="Parijaat Cooperative Team" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">QUALITY SERVICE IS OUR MOTTO</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          We cannot, as a country, improve economically, socially, and culturally without quality education.
        </p>
        <Button className="bg-transparent border-2 border-green-500 text-white hover:bg-green-500 hover:text-white px-8 py-3 text-lg">
          READ MORE
        </Button>
      </div>
    </section>
  )
}
