import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Cart.css";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { ProductCardLandscape } from "components/ProductCard/ProductCardLandscape";
import { PriceCard } from "components/PriceCard/PriceCard";
import { CartContext } from "context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cartPage">
      <div className="wrapContent">
      <h2 className="cart-heading">
        Your Cart{cart.length === 0 ? "" : `(${cart.length})`}
        </h2>
        <div className="stepper">
        <Stepper>
          <Step completed={cart.length !== 0}>
            <StepLabel>Add Items to Cart</StepLabel>
          </Step>
          <Step>
            <StepLabel>Checkout</StepLabel>
          </Step>
          <Step>
            <StepLabel>Place Order</StepLabel>
          </Step>
        </Stepper>
      </div>
      {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-detail">
          <div className="product-card-landscape-list">
            <ul>
                  {cart.map((product) => (
                <li className="product-card-landscape-list-listing" key={uuid()}>
                  <ProductCardLandscape product={product} />
                </li>
              ))}
            </ul>
          </div>
          <div className="price-card">
            <PriceCard />
          </div>
        </div>
        )}
        </div>
    </div>
  );
};

export default Cart;
