// src/components/ui/navbar.tsx

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="text-lg font-bold">
        <Link to="/">Hybrid Gear</Link>
      </div>
      <div className="flex space-x-4 w-full">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};
