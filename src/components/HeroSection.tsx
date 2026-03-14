import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Bismi Couture - Collection élégante"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-primary-foreground/80 mb-4 animate-fade-in">
          Bismi Couture
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight max-w-4xl animate-fade-in-up">
          L'Élégance au Service de la Modestie
        </h1>
        <p className="font-body text-base md:text-lg text-primary-foreground/80 mt-6 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Découvrez nos créations uniques mêlant tradition marocaine et modernité
        </p>
        <Link
          to="/collection"
          className="btn-primary mt-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Découvrir la collection
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
