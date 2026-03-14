import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categoryLabels: Record<string, string> = {
  all: "Toutes",
  djellaba: "Djellaba Marocaine",
  abayas: "Abayas & Modeste",
  couture: "Couture sur Mesure",
  "pret-a-porter": "Prêt-à-porter",
};

const Collection = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("categorie") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Boutique
              </p>
              <h1 className="font-display text-3xl md:text-5xl text-foreground">
                Notre Collection
              </h1>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`font-body text-sm tracking-wider uppercase px-5 py-2 transition-all duration-300 border ${
                    activeCategory === key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center text-muted-foreground font-body mt-12">
                Aucun produit dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
