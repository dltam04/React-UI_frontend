// src/app/checkout/SuccessPage.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
      <p className="text-lg mb-6">Thank you for your purchase.</p>
      <Button onClick={() => navigate("/")} className="text-white bg-blue-600">
        Continue Shopping
      </Button>
    </div>
  );
}
