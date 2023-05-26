import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

import "./index.css";
import App from "./App";
import { ProductProvider } from "./Context/ProductContext";
import { AuthProvider } from "./Context/AuthContext";
import { makeServer } from "./services/server";
import { CartProvider } from "./Context/CartContext";

// Call make Server
makeServer();

createRoot(document.getElementById("root"))
  .render(
    // <React.StrictMode>
      <BrowserRouter basename="/DeliveryApp/">
        <ProductProvider>
          <CartProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    // </React.StrictMode>
);
