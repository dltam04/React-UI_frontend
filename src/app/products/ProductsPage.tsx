// All-products page

import { useEffect, useState } from 'react';
import type { Product } from '@/models/Product';
import { getProducts } from '@/services/productService';
import { ProductList } from '@/components/ui/ProductList';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8 text-black">
        All Products
      </h1>
      <ProductList products={products} />
    </div>
  );
}
