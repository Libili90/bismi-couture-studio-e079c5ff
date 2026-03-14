import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-main.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero banner */}
        <section className="relative h-[50vh] overflow-hidden">
          <img src={heroImage} alt="Bismi Couture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="font-display text-4xl md:text-5xl text-primary-foreground">
              Notre Histoire
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              À propos
            </p>
            <h2 className="font-display text-3xl text-foreground mb-8">
              Bismi Couture
            </h2>
            <div className="space-y-6 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Bismi Couture est née d'une passion profonde pour la mode modeste et l'artisanat marocain.
                Chaque pièce est conçue avec soin, mêlant tradition séculaire et design contemporain.
              </p>
              <p>
                Notre mission est de sublimer chaque femme en lui offrant des vêtements élégants,
                confortables et respectueux de ses valeurs. Des djellabas traditionnelles aux créations
                haute couture, nous mettons un point d'honneur à utiliser les meilleurs tissus et
                les techniques artisanales les plus raffinées.
              </p>
              <p>
                Basée au Maroc, notre équipe de couturières talentueuses travaille chaque création
                avec amour et précision, pour que chaque cliente se sente unique et magnifique.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-cream">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl text-foreground text-center mb-14">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Qualité Artisanale",
                  desc: "Chaque pièce est cousue à la main avec les meilleurs matériaux, garantissant durabilité et beauté.",
                },
                {
                  title: "Élégance Modeste",
                  desc: "Nous croyons que la modestie et le style vont de pair. Nos designs le prouvent.",
                },
                {
                  title: "Héritage Marocain",
                  desc: "Nous perpétuons les traditions du savoir-faire marocain tout en embrassant la modernité.",
                },
              ].map((v) => (
                <div key={v.title} className="text-center">
                  <h3 className="font-display text-xl text-foreground mb-3">{v.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
