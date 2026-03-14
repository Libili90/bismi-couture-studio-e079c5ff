import { Truck, ShieldCheck, RotateCcw, Heart } from "lucide-react";

const features = [
  { icon: Truck, label: "Livraison internationale" },
  { icon: ShieldCheck, label: "Paiement sécurisé" },
  { icon: RotateCcw, label: "Retour sous 3 jours" },
  { icon: Heart, label: "Qualité garantie" },
];

const FeaturesBar = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.label} className="flex flex-col items-center text-center gap-3">
            <f.icon size={28} strokeWidth={1.2} className="text-primary" />
            <p className="font-body text-sm tracking-wide text-secondary-foreground">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBar;
