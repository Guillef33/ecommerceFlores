import React, { useState, useContext } from "react";
import "./scss/base.scss";
import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Newnav from "./components/Navbar/Newnav";
import Category from "./pages/category/Category";
import AppProvider from "./context/AppContext";

import { AppContext } from "./context/AppContext";

function App() {
  // const { contador, setContador } = useContext(AppContext);

  return (
    <AppProvider>
      <BrowserRouter>
        <Newnav
        // contador={contador} setContador={setContador}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
              // contador={contador} setContador={setContador}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="category/:nameCategory" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
