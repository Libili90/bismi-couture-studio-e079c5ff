import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate("/connexion");
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("full_name, phone").eq("id", user.id).single()
      .then(({ data }) => {
        if (data) {
          setFullName(data.full_name || "");
          setPhone(data.phone || "");
        }
      });
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from("profiles").update({ full_name: fullName, phone }).eq("id", user.id);
    if (error) toast({ title: "Erreur", description: error.message, variant: "destructive" });
    else toast({ title: "Profil mis à jour ✓" });
    setSaving(false);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  if (authLoading) return null;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding">
          <div className="max-w-lg mx-auto">
            <h1 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">Mon Espace</h1>

            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <Label className="font-body text-sm tracking-wider uppercase text-muted-foreground">Email</Label>
                <Input value={user?.email || ""} disabled className="mt-1.5 bg-muted" />
              </div>
              <div>
                <Label className="font-body text-sm tracking-wider uppercase text-muted-foreground">Nom complet</Label>
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-1.5 border-border bg-background" />
              </div>
              <div>
                <Label className="font-body text-sm tracking-wider uppercase text-muted-foreground">Téléphone</Label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1.5 border-border bg-background" />
              </div>
              <button type="submit" disabled={saving} className="btn-primary w-full">
                {saving ? "..." : "Enregistrer"}
              </button>
            </form>

            <button onClick={handleLogout} className="btn-outline-primary w-full mt-4">
              Se déconnecter
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
