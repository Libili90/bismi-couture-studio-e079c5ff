import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, loading, removeFromCart, updateQuantity, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 section-padding text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Mon Panier</h1>
          <p className="font-body text-muted-foreground mb-6">Connectez-vous pour accéder à votre panier.</p>
          <button onClick={() => navigate("/connexion")} className="btn-primary">Se connecter</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">Mon Panier</h1>

            {loading ? (
              <p className="text-center text-muted-foreground font-body">Chargement...</p>
            ) : items.length === 0 ? (
              <div className="text-center">
                <p className="text-muted-foreground font-body mb-6">Votre panier est vide.</p>
                <button onClick={() => navigate("/collection")} className="btn-primary">Voir la collection</button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-border pb-6">
                      <img
                        src={item.product.image_url}
                        alt={item.product.name}
                        className="w-24 h-32 object-cover rounded-sm bg-secondary"
                      />
                      <div className="flex-1">
                        <h3 className="font-display text-base text-foreground">{item.product.name}</h3>
                        <p className="font-body text-sm text-muted-foreground mt-1">
                          {item.product.price.toLocaleString("fr-MA")} MAD
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-card p-6 rounded-sm h-fit">
                  <h2 className="font-display text-xl text-foreground mb-6">Récapitulatif</h2>
                  <div className="space-y-3 font-body text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Sous-total</span>
                      <span>{totalPrice.toLocaleString("fr-MA")} MAD</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Livraison</span>
                      <span>Gratuite</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between text-foreground font-display text-lg">
                      <span>Total</span>
                      <span>{totalPrice.toLocaleString("fr-MA")} MAD</span>
                    </div>
                  </div>
                  <button className="btn-primary w-full mt-6">
                    Commander
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
