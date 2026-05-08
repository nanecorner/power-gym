import Link from "next/link"
import { Dumbbell, Instagram, Facebook, Youtube, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/smartfit/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/SmartFit.Oficial", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@smartfit", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/SmartFitMx", label: "Twitter" },
]

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tight">
                POWER<span className="text-primary">GYM</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Más de 10 años transformando vidas. Somos el gimnasio líder en la ciudad
              con las mejores instalaciones y el equipo más profesional.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Av. Paseo de la Reforma 500</li>
              <li>Col. Juárez, CDMX</li>
              <li>+52 442 123 4567</li>
              <li>info@powergym.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Power Gym. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Términos y condiciones
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">
            Hecho por{" "}
            <span className="text-primary font-semibold hover:opacity-80 transition-opacity">D&apos;cReaM</span>{" "}🐢
          </p>
        </div>
      </div>
    </footer>
  )
}
