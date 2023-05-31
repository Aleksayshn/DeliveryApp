import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "components/Layout/Layout";
import { RequireAuth } from "./auth/RequiresAuth";

const Home = lazy(() => import('./Pages/Home'));
const ProductListing = lazy(() => import('./Pages/ProductListing'));
const Product = lazy(() => import('./Pages/Product'));
const Login = lazy(() => import('./Pages/Login'));
const Signup = lazy(() => import('./Pages/Signup'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Cart = lazy(() => import('./Pages/Cart'));
const Wishlist = lazy(() => import('./Pages/Wishlist'));
const UserProfile = lazy(() => import('./Pages/UserProfile'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const MockAPI = lazy(() => import('./Pages/MockAPI'));

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
          <Route path="/mockman" element={<MockAPI />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
