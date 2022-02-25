import React, { useState, useContext } from "react";
import "../assets/scss/base.scss";
import Home from "../pages/Home/Home";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import CartPage from "../components/Cart/CartPage";

import ItemDetailContainerFB from "../components/ItemDetailFirebase/ItemDetailContainerFB";
import Newnav from "../components/Navbar/Newnav";
import Footer from "../components/Footer/Footer";

import Category from "../pages/category/Category";
import Checkout from "../components/checkout/Checkout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Newnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="category/:nameCategory" element={<Category />} />
        <Route path="detalle/:id" element={<ItemDetailContainerFB />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
