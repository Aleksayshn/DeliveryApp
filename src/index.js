import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";


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
