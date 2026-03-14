import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Z.",
    text: "La qualité des tissus est exceptionnelle. Ma djellaba est magnifique, les finitions sont parfaites. Je recommande vivement !",
  },
  {
    name: "Amina K.",
    text: "J'ai commandé une abaya sur mesure et le résultat dépasse mes attentes. Le service client est très à l'écoute.",
  },
  {
    name: "Nadia M.",
    text: "Des créations uniques qui allient modernité et tradition. Je suis fan de leur collection prêt-à-porter !",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Témoignages
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-14">
          Ce que disent nos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background p-8 shadow-card rounded-sm"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-display text-base text-foreground">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">Cliente vérifiée</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
