// src/pages/ProductPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "@/services/productService";
import { ProductDetail } from "@/components/ui/ProductDetail";
import type { Product } from "@/models/Product";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      if (!isNaN(numericId)) {
        getProductById(numericId)
          .then(setProduct)
          .catch(() => setProduct(null));
      } else {
        setProduct(null);
      }
    }
  }, [id]);

  if (!product) return <p>Loading or Not Found...</p>;

  return <ProductDetail product={product} />;
};
