import React, { useState, useContext } from "react";
import "../assets/scss/base.scss";
import Home from "../pages/Home/Home";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import CartPage from "../components/Cart/CartPage";
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer";

import ItemDetailContainerFB from '../components/ItemDetailFirebase/ItemDetailContainerFB'
import Newnav from "../components/Navbar/Newnav";
import Category from "../pages/category/Category";
import Firebase from "../pages/firebase/Firebase";

import { AppContext } from "../context/AppContext";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Newnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/firebase" element={<Firebase />} />

        <Route path="category/:nameCategory" element={<Category />} />
        <Route path="firebaseprodycts/:id" element={<ItemDetailContainerFB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;