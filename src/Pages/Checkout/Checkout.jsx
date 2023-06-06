import { useContext, useState } from "react";
import { AddressCard } from "../../components/Address/AddressCard";
import { PriceCard } from "../../components/PriceCard/PriceCard";
import "./Checkout.css";
import { AuthContext } from "../../context/AuthContext";

const Checkout = () => {
  const [hideAddress, sethideAddress] = useState(true);

  const { addAddressHandler } = useContext(AuthContext);
  return (
    <>
      <div
        style={{ display: hideAddress && "none" }}
        className="add-address-form-container"
      >
        <form
          onSubmit={(e) => {
            addAddressHandler(e);
            sethideAddress(true);
          }}
          className="add-address-form"
        >
          <h3>ADD NEW ADDRESS</h3>
          <label htmlFor="addressname">Name</label>
          <input
            id="addressname"
            type="text"
            placeholder="John walter"
            required={true}
          />
          <label htmlFor="pincode">Pin Code</label>
          <input
            id="pincode"
            type="number"
            required={true}
            placeholder="123456"
          />
          <label htmlFor="mobileno">mobile</label>
          <input
            id="mobileno"
            type="number"
            required={true}
            placeholder="1234567890"
          />
          <label htmlFor="address">address</label>
          <textarea
            col={5}
            id="address"
            type="text"
            required={true}
            placeholder="New Delivery Address Here"
          ></textarea>
          <button type="submit" className="btn-add-address">
            Add Address
          </button>
          <button
            type="button"
            className="btn-cancel-address"
            onClick={() => sethideAddress(true)}
          >
            Cancel
          </button>
        </form>
      </div>
      <div className="checkout-container">
        <div className="address-card">
          <AddressCard hideAddressHandler={sethideAddress} />
        </div>
        <div className="price-card">
          <PriceCard />
        </div>
      </div>
    </>
  );
};

export default Checkout;
