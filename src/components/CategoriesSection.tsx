import { Link } from "react-router-dom";
import categoryDjellaba from "@/assets/category-djellaba.jpg";
import categoryAbaya from "@/assets/category-abaya.jpg";
import categoryCouture from "@/assets/category-couture.jpg";
import categoryPretAPorter from "@/assets/category-pret-a-porter.jpg";

const categories = [
  {
    name: "Djellaba Marocaine",
    description: "Tradition et raffinement",
    image: categoryDjellaba,
    slug: "djellaba",
  },
  {
    name: "Abayas & Modeste",
    description: "Élégance en toute pudeur",
    image: categoryAbaya,
    slug: "abayas",
  },
  {
    name: "Couture sur Mesure",
    description: "Créations personnalisées",
    image: categoryCouture,
    slug: "couture",
  },
  {
    name: "Prêt-à-porter",
    description: "Style au quotidien",
    image: categoryPretAPorter,
    slug: "pret-a-porter",
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Nos catégories
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Explorez nos Collections
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/collection?categorie=${cat.slug}`}
              className="group relative overflow-hidden aspect-[3/4] rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-display text-xl mb-1">{cat.name}</h3>
                <p className="font-body text-sm opacity-80">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
