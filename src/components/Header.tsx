
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-serif text-primary">
            Hotel Arena Inn
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-secondary transition-colors">
              Inicio
            </Link>
            <Link to="/rooms" className="text-gray-600 hover:text-secondary transition-colors">
              Habitaciones
            </Link>
            <Link to="/location" className="text-gray-600 hover:text-secondary transition-colors">
              Ubicación
            </Link>
            <Link to="/reviews" className="text-gray-600 hover:text-secondary transition-colors">
              Testimonios
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-secondary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                to="/rooms"
                className="text-gray-600 hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                Habitaciones
              </Link>
              <Link
                to="/location"
                className="text-gray-600 hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                Ubicación
              </Link>
              <Link
                to="/reviews"
                className="text-gray-600 hover:text-secondary transition-colors"
                onClick={toggleMenu}
              >
                Testimonios
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
