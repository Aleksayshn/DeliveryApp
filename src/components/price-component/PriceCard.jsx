import { useContext } from "react";
import "./PriceCard.css";
import { CartContext } from "../../Context/CartContext";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

export const PriceCard = () => {
  const {
    getTotalPrice,
    getTotalDiscount,
    cart,
    clearCart,
    removeMultipleFromCart,
  } = useContext(CartContext);
  const { address, orderHistoryHandler } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const orderHandler = (orderRes) => {
    const date = new Date();
    const selectedAddress = address.find(({ active }) => active);
    orderHistoryHandler(
      orderRes.razorpay_payment_id,
      getTotalPrice() + 249,
      date.toString(),
      selectedAddress,
      cart
    );
    success(`Payment Successfull!!`);
    removeMultipleFromCart(cart);
    clearCart();
    navigate("/profile");
  };

  const error = (msg) => {
    return toast.error(msg, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  const success = (msg) => {
    return toast.success(msg, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };


 const fakePaymentService = (amount, successCallback) => {
  setTimeout(() => {
    const fakeResponse = {
      razorpay_payment_id: "fake_payment_id",
    };
    successCallback(fakeResponse);
  }, 1000);
};


 const orderAuthHandler = (amount) => {
  if (address.length !== 0 && address.find(({ active }) => active)) {
    if (cart.length !== 0) {
      // displayRazorpay(amount);
      fakePaymentService(amount, orderHandler);
      return;
    } else {
      error("No items added");
    }
  } else {
    error("Please select an address to place order");
  }
};


  return (
    <>
      <h3>Order details</h3>
      <hr />
      <section>
        <ul className="price-detail-list">
          {cart.length === 0 ? (
            <p>No Product Added</p>
          ) : (
            <ul className="price-detail-list">
              {cart.map(({ title, price, qty }) => (
                <li>
                  <span>
                    {title}(x{qty})
                  </span>
                  <span className="price">{price * qty}</span>
                </li>
              ))}
            </ul>
          )}
          <li>
            <span>Discount</span>
            <span>
              -<span className="price">{getTotalDiscount()}</span>
            </span>
          </li>
          <li>
            <span>Delivery Charges</span>
            <span className="price">{getTotalPrice() === 0 ? "0" : "249"}</span>
          </li>
          <hr />
          <li className="total-price">
            <span>Total amount</span>
            <span className="price">
              {getTotalPrice() === 0 ? "0" : getTotalPrice() + 249}
            </span>
          </li>
        </ul>
      </section>
      <hr />
      <p className="saving-info">
        You will save {getTotalDiscount()} on this order
      </p>
      <button
        style={{ display: location?.pathname === "/checkout" ? "" : "none" }}
        className="btn-place-order"
        onClick={() => orderAuthHandler(getTotalPrice())}
      >
        Place Order
      </button>
      <button
        style={{ display: location?.pathname === "/cart" ? "" : "none" }}
        className="btn-place-order"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
    </>
  );
};
