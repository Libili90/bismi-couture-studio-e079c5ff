import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Contactez-nous
              </p>
              <h1 className="font-display text-3xl md:text-5xl text-foreground">
                Restons en Contact
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-6">
                    Nous sommes à votre écoute
                  </h2>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    N'hésitez pas à nous contacter pour toute question concernant nos produits,
                    commandes sur mesure ou collaborations.
                  </p>
                </div>
                <div className="space-y-5">
                  {[
                    { icon: Mail, text: "contact@bismicouture.com" },
                    { icon: Phone, text: "+212 6 00 00 00 00" },
                    { icon: MapPin, text: "Casablanca, Maroc" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <p className="font-body text-sm text-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm text-foreground block mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
