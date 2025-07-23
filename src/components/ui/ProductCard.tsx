import { Card, CardContent, CardHeader, CardTitle } from "./card";
import type { Product } from "@/models/Product";

interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-black gap-0">
            {product.imageUrl && (
                <div className="w-full h-full object-contain mb-4">
                    <img 
                    src={product.imageUrl}
                    alt={product.name}
                    className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
                    />
                </div>
            )}

            <CardHeader className="p-4">
                <CardTitle className="text-xl font-bold text-black"> 
                    {product.name} 
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-grow flex flex-col justify-between">
                {product.description && (
                <p className="text-black text-sm mb-2">{product.description}</p>
                )}
                <p className="text-lg font-semibold text-black">
                    ${product.price}
                </p>
            </CardContent>
        </Card>
    );
};