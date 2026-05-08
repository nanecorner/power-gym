"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Área de pesas y musculación" },
  { src: "/images/gallery-2.jpg", alt: "Zona de cardio" },
  { src: "/images/gallery-3.jpg", alt: "Clases grupales" },
  { src: "/images/gallery-4.jpg", alt: "Área de boxeo y artes marciales" },
  { src: "/images/gallery-5.jpg", alt: "Zona de stretching y yoga" },
  { src: "/images/gallery-6.jpg", alt: "Vestidores y amenidades" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrevious = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
    )
  }
  
  const goToNext = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
    )
  }

  return (
    <section id="galeria" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Galería
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Conoce nuestras
            <span className="text-primary"> instalaciones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre nuestro gimnasio equipado con la mejor tecnología y espacios 
            diseñados para tu comodidad y rendimiento.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-medium">{image.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground hover:bg-foreground/10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-foreground/10"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Anterior</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-foreground/10"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Siguiente</span>
          </Button>

          <div 
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  )
}
