// src/components/ui/ProductDetail.tsx
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/CartStore";

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
}

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { items, addItem, removeItem } = useCartStore();
  const cartItem = items.find((item) => item.productId === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
        id: "",
        productId: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
    });
  };

  const onRemoveItem = () => {
    removeItem(product.id);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.imageUrl && (
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-contain w-full h-full"
          />
        </div>
      )}
      <div className="md:w-1/2">
        <h1 className="text-black font-bold mb-4">{product.name}</h1>
        {product.description && (
          <p className="text-gray-700 mb-4">{product.description}</p>
        )}
        <p className="text-lg font-semibold text-gray-900">
          ${(product.price / 100).toFixed(2)}
        </p>
        <div className="flex items-center space-x-4 mt-4">
          <Button
            className="h-6 w-6 border border-black text-white text-lg font-semibold rounded"
            onClick={onRemoveItem}
          >
            -
          </Button>
          <span className="text-lg text-black font-semibold">{quantity}</span>
          <Button
            onClick={onAddItem}
            className="h-6 w-6 bg-black text-white text-lg font-semibold rounded hover:bg-gray-800 transition"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
