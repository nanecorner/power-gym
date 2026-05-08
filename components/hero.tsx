import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="Interior del gimnasio Power Gym"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
          Bienvenido a Power Gym
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
          Transforma tu cuerpo,
          <br />
          <span className="text-primary">transforma tu vida</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Descubre un espacio diseñado para superar tus límites. Equipamiento de última 
          generación y entrenadores certificados te esperan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Empieza hoy
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 border-foreground/20 hover:bg-foreground/10">
            <a href="#servicios">
              Ver servicios
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold text-primary">500+</p>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Miembros activos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold text-primary">15+</p>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Entrenadores</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold text-primary">10</p>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Años de experiencia</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
