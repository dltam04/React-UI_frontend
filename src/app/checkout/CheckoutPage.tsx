// src/pages/CheckoutPage.tsx

import { useCartStore } from "@/store/CartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const navigate = useNavigate();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://45.77.248.87:8080/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) throw new Error("Checkout failed");

      clearCart();
      navigate("/success");
    } catch (error) {
      alert("There was an error processing your order.");
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl text-black font-semibold mb-4">Your Cart is Empty.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-black font-semibold mb-8 text-center">Checkout</h1>
      <Card className="w-full max-w-2xl mx-auto mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-black font-semibold">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium text-lg flex-grow pr-4">
                    {item.name}
                  </span>
                  <span className="text-black font-semibold text-right min-w-[120px]">
                    ${(item.price * item.quantity / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.productId)} // <- assumes `removeItem` accepts item.id (number or string)
                  >
                    –
                  </Button>
                  <span className="text-lg text-black font-semibold">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-4 text-lg text-black font-semibold text-right">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <div className="max-w-2xl mx-auto">
        <Button onClick={handleCheckout} className="w-full">
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}
