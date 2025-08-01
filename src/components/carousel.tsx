import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { getProducts } from "../services/productService"; // Adjust path as needed
import type { Product } from "../models/Product";

export const Carousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  if (products.length === 0) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  const currentProduct = products[current];

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
      {currentProduct.imageUrl && (
        <div className="relative h-80 w-full">
          <img
            src={currentProduct.imageUrl}
            alt={currentProduct.name}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct.name}
        </CardTitle>
        {currentProduct.price && (
          <p className="text-xl text-white">
            ${(currentProduct.price / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
