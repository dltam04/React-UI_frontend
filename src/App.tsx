// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import HomePage from "./app/home/HomePage";
import ProductsPage from "./app/products/ProductsPage";
import CheckoutPage from "./app/checkout/CheckoutPage";
import { ProductPage } from "./app/products/[id]/ProductPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen min-w-screen bg-white">
        <Navbar />
        <main className="flex-grow mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />}/>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
