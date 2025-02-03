import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                +1 234 567 890
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                info@luxuryhotel.com
              </p>
              <p className="flex items-center">
                <MapPin size={16} className="mr-2" />
                123 Luxury Street, City
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-secondary transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-secondary transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-secondary transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
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
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for special offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l text-gray-800 w-full"
              />
              <button
                type="submit"
                className="bg-secondary px-4 py-2 rounded-r hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>&copy; 2024 Luxury Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;