import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await signIn(email, password);
        toast({ title: "Bienvenue !" });
        navigate("/");
      } else {
        await signUp(email, password, fullName);
        toast({ title: "Inscription réussie", description: "Vérifiez votre email pour confirmer votre compte." });
      }
    } catch (err: any) {
      toast({ title: "Erreur", description: err.message, variant: "destructive" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl text-foreground">
                {isLogin ? "Connexion" : "Inscription"}
              </h1>
              <p className="font-body text-muted-foreground mt-3">
                {isLogin ? "Accédez à votre espace client" : "Créez votre compte Bismi Couture"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <Label htmlFor="fullName" className="font-body text-sm tracking-wider uppercase text-muted-foreground">
                    Nom complet
                  </Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required={!isLogin}
                    className="mt-1.5 border-border bg-background"
                  />
                </div>
              )}
              <div>
                <Label htmlFor="email" className="font-body text-sm tracking-wider uppercase text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1.5 border-border bg-background"
                />
              </div>
              <div>
                <Label htmlFor="password" className="font-body text-sm tracking-wider uppercase text-muted-foreground">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="mt-1.5 border-border bg-background"
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? "..." : isLogin ? "Se connecter" : "S'inscrire"}
              </button>
            </form>

            <p className="text-center font-body text-sm text-muted-foreground mt-6">
              {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-primary hover:underline">
                {isLogin ? "S'inscrire" : "Se connecter"}
              </button>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
