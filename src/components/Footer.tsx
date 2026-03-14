import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl mb-4">Bismi Couture</h3>
            <p className="font-body text-sm leading-relaxed opacity-70">
              L'élégance modeste, sublimée par la tradition marocaine et le savoir-faire artisanal.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-widest uppercase mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Accueil</Link>
              <Link to="/collection" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Collection</Link>
              <Link to="/a-propos" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">À propos</Link>
              <Link to="/contact" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-widest uppercase mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="font-body text-sm opacity-70 mt-4">contact@bismicouture.com</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Bismi Couture. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
