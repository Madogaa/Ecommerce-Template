import React from "react";
import { CartProvider } from "./context/Cart.jsx";
import ProductsView from "./components/Products/ProductsView";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";
import Logo from "./components/Navbar/Logo.jsx";
import "./App.css";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <header id="header">
          <NavBar />
          <Logo />
        </header>
        <main>
          <Routes>
            <Route path="/products" element={<ProductsView />} />
            <Route path="/detail/:idProduct" element={<ProductDetail />} />
          </Routes>
          <Cart />
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
