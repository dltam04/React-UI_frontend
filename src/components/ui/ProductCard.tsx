import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import type { Product } from "@/models/Product";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Link to={`/products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.imageUrl && (
          <div className="relative h-60 w-full overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}

        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          {product.description && (
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          )}
          <p className="text-lg font-semibold text-gray-900">
            ${(product.price / 100).toFixed(2)}
          </p>
          <Button className="mt-4 bg-black text-white">View Details</Button>
        </CardContent>
      </Card>
    </Link>
  );
};
