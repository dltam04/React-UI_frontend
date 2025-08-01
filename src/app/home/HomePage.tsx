import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import type { Product } from "@/models/Product";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const heroImageUrl =
    products.length > 0 && products[0].imageUrl
      ? products[0].imageUrl
      : "/placeholder.jpg";

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  return (
    <div>
      {/* Hero Section */}
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-black">
              Ready for a run?
            </h2>
            <p className="text-neutral-600">
              All the gear you need is here!
            </p>
            <Button
              asChild
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-black hover:bg-gray-900 transition"
            >
              <Link to="/products" className="no-underline !text-white">Browse All Products</Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-[450px]">
            <img
              alt="Hero"
              src={heroImageUrl}
              className="rounded shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-8 px-4">
        <Carousel />
      </section>
    </div>
  );
}
