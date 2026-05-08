import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
            Ubicación
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Visítanos y conoce
            <span className="text-primary"> nuestro espacio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos ubicados en una zona céntrica con fácil acceso y estacionamiento. 
            Te esperamos para una visita guiada gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-lg overflow-hidden bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661137896038!2d-99.16869492393799!3d19.427020481872827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1699900000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Power Gym"
              className="absolute inset-0"
            />
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Paseo de la Reforma 500<br />
                    Col. Juárez, Cuauhtémoc<br />
                    CDMX, C.P. 06600
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Horario</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lunes a Viernes: 5:00 AM - 11:00 PM</p>
                    <p>Sábados: 6:00 AM - 10:00 PM</p>
                    <p>Domingos: 7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Contacto</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Tel: +52 55 1234 5678</p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      info@powergym.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
