import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contáctanos</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                Teléfono fijo (+593) 04 660 0003
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                gery_delacruz@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin size={30} className="mr-2" />
                Santa Elena, La Libertad, Av. 9 de Octubre 533 y calle Guayaquil
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Links de página</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-secondary transition-colors">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-secondary transition-colors">
                  Ubicación
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-secondary transition-colors">
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HOTELARENAINN"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>&copy; 2025 Hotel Arena Inn. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;