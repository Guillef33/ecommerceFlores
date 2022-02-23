import React, { useState, useContext } from "react";

import { CartContext } from "./context/CartContext";
import CartProvider from "./context/CartContext";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
