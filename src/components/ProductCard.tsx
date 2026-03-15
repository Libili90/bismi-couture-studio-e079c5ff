import { type Product } from "@/hooks/useProducts";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <div className="relative overflow-hidden aspect-[3/4] rounded-sm bg-secondary">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-[11px] tracking-wider uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addToCart(product.id)}
          className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm p-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          aria-label="Ajouter au panier"
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mt-1">
          {product.price.toLocaleString("fr-MA")} MAD
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
