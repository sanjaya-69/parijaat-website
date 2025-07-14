"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const images = ["/image2.jpeg", "/image7.jpg"]; // Add your image paths here

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img} alt="Hero background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">QUALITY SERVICE IS OUR MOTTO</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Parijat Saving & Credit Cooperative Ltd. was established in 2067 BS (2014 AD) which is committed to providing quality financial services to our community, fostering economic growth and social development through cooperative principles.
        </p>
        <a href="#about">
          <Button className="bg-transparent border-2 border-green-500 text-white hover:bg-green-500 hover:text-white px-8 py-3 text-lg">
            READ MORE
          </Button>
        </a>
      </div>
    </section>
  );
}
