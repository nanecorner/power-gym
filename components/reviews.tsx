import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const reviews = [
  {
    name: "Carlos Martínez",
    initials: "CM",
    role: "Miembro desde 2022",
    rating: 5,
    content: "El mejor gimnasio de la ciudad. Los entrenadores son muy profesionales y el ambiente es increíble. He logrado resultados que nunca pensé posibles."
  },
  {
    name: "María López",
    initials: "ML",
    role: "Miembro desde 2021",
    rating: 5,
    content: "Las clases grupales son excelentes. Me encanta el spinning y el CrossFit. El horario flexible me permite entrenar sin problemas."
  },
  {
    name: "Roberto García",
    initials: "RG",
    role: "Miembro desde 2023",
    rating: 5,
    content: "Instalaciones de primera clase y equipamiento moderno. El área de pesas tiene todo lo que necesito para mis entrenamientos."
  },
  {
    name: "Ana Fernández",
    initials: "AF",
    role: "Miembro desde 2020",
    rating: 5,
    content: "Llevo 4 años entrenando aquí y cada día me sorprenden más. El servicio al cliente es excepcional y siempre están mejorando."
  },
  {
    name: "Diego Rodríguez",
    initials: "DR",
    role: "Miembro desde 2022",
    rating: 5,
    content: "Mi entrenador personal me ha ayudado a perder 20 kilos en 8 meses. Recomiendo totalmente sus programas personalizados."
  },
  {
    name: "Laura Sánchez",
    initials: "LS",
    role: "Miembro desde 2023",
    rating: 5,
    content: "El área de yoga y stretching es mi lugar favorito. Muy tranquilo y bien equipado. Perfecto para relajarse después del trabajo."
  },
]

export function Reviews() {
  return (
    <section id="resenas" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Testimonios
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Lo que dicen nuestros
            <span className="text-primary"> miembros</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Más de 500 personas ya forman parte de nuestra comunidad. 
            Descubre por qué nos eligen cada día.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-secondary border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 text-pretty">
                  {`"${review.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="bg-primary/20">
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
