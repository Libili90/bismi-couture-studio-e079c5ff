export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Djellaba Royale Ivoire",
    price: 890,
    category: "djellaba",
    image: "/placeholder.svg",
    badge: "Nouveau",
  },
  {
    id: "2",
    name: "Djellaba Perle d'Or",
    price: 1200,
    category: "djellaba",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Abaya Rosée du Matin",
    price: 650,
    category: "abayas",
    image: "/placeholder.svg",
    badge: "Best-seller",
  },
  {
    id: "4",
    name: "Abaya Élégance Noire",
    price: 720,
    category: "abayas",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Robe de Soirée Pétale",
    price: 1500,
    category: "couture",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    name: "Caftan Nuit Étoilée",
    price: 1800,
    category: "couture",
    image: "/placeholder.svg",
    badge: "Sur mesure",
  },
  {
    id: "7",
    name: "Ensemble Lin Naturel",
    price: 420,
    category: "pret-a-porter",
    image: "/placeholder.svg",
  },
  {
    id: "8",
    name: "Tunique Souffle de Soie",
    price: 380,
    category: "pret-a-porter",
    image: "/placeholder.svg",
    badge: "Nouveau",
  },
];
