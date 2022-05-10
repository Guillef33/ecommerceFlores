import React, { useState, useContext } from "react";

import { CartContext } from "./context/CartContext";
import CartProvider from "./context/CartContext";

import AppRoutes from "./routes/AppRoutes";

// import googleAnalytics from "@analytics/google-analytics";
// import Analytics from "analytics";

// import { AnalyticsProvider, useAnalytics } from "use-analytics";

// const myPlugin = {
//   name: "my-custom-plugin",
//   page: ({ payload }) => {
//     console.log("page view fired", payload);
//   },
//   track: ({ payload }) => {
//     console.log("track event", payload);
//   },
// };


// const analytics = Analytics({
//   app: "awersome",
//   plugins: [
//     myPlugin,
//     googleAnalytics({
//       trackingId: "G-6GXQ55LQ04",
//     }),
//   ],
// });

// console.log('analytics', analytics)

function App() {
  return (
    // <AnalyticsProvider instance={analytics}>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    // </AnalyticsProvider>
  );
}

export default App;
