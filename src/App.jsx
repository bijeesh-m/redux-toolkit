import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;
