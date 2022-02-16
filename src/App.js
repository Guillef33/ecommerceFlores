import React, { useState, useContext } from "react";

import { AppContext } from "./context/AppContext";
import AppProvider from "./context/AppContext";

import { CartContext } from "./context/CartContext";
import CartProvider from "./context/CartContext";

import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <CartProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </CartProvider>
  );
}

export default App;
