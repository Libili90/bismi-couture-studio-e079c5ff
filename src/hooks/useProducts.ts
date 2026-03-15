import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  badge: string | null;
  description: string | null;
  category: {
    id: string;
    slug: string;
    name: string;
  } | null;
}

export const useProducts = (categorySlug?: string) => {
  return useQuery({
    queryKey: ["products", categorySlug],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("id, name, price, image_url, badge, description, categories(id, slug, name)")
        .order("created_at", { ascending: false });

      const { data, error } = await query;
      if (error) throw error;

      const products = (data || []).map((p: any) => ({
        ...p,
        category: p.categories,
      }));

      if (categorySlug && categorySlug !== "all") {
        return products.filter((p: Product) => p.category?.slug === categorySlug);
      }
      return products as Product[];
    },
  });
};
