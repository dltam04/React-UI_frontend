
export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  name?: string;
  imageUrl?: string;
  price: number;
}
