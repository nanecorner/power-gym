import { Dumbbell, Users, Heart, Flame, Timer, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Dumbbell,
    title: "Musculación",
    description: "Área completa de pesas libres y máquinas de última generación para desarrollar fuerza y masa muscular."
  },
  {
    icon: Heart,
    title: "Cardio",
    description: "Zona de cardio con cintas, bicicletas y elípticas de alta gama para mejorar tu resistencia."
  },
  {
    icon: Users,
    title: "Clases grupales",
    description: "Spinning, CrossFit, Zumba, Yoga y más. Clases dinámicas para todos los niveles."
  },
  {
    icon: Flame,
    title: "Entrenamiento funcional",
    description: "Circuitos de alta intensidad diseñados para quemar grasa y mejorar tu condición física general."
  },
  {
    icon: Timer,
    title: "Entrenamiento personal",
    description: "Sesiones one-on-one con entrenadores certificados para alcanzar tus objetivos más rápido."
  },
  {
    icon: Trophy,
    title: "Artes marciales",
    description: "Clases de boxeo, kickboxing y MMA para aprender defensa personal y mejorar tu condición."
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Nuestros servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Todo lo que necesitas para tu
            <span className="text-primary"> transformación</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos una amplia variedad de servicios para que encuentres el entrenamiento 
            perfecto según tus objetivos y preferencias.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-secondary border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
