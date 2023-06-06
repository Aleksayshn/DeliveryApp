import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Layout from "components/Layout/Layout";
import { RequireAuth } from "./components/RequireAuth/RequiresAuth";

const Home = lazy(() => import('./Pages/Home/Home'));
const ProductListing = lazy(() => import('./Pages/ProductListing/ProductListing'));
const Product = lazy(() => import('./Pages/Product/Product'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Signup = lazy(() => import('./Pages/Signup/Signup'));
const Checkout = lazy(() => import('./Pages/Checkout/Checkout'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Wishlist = lazy(() => import('./Pages/Wishlist/Wishlist'));
const UserProfile = lazy(() => import('./Pages/UserProfile/UserProfile'));
const OrderHistory = lazy(() => import('./Pages/OrderHistory/OrderHistory'));
const NotFound = lazy(() => import('./Pages/NotFound'));

function App() {
 return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route
            path="/wishlist"
            element={
              <RequireAuth>
                <Wishlist />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
          />
          <Route
          path="/orders"
          element={
            <RequireAuth>
              <OrderHistory />
            </RequireAuth>
          }
        />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
