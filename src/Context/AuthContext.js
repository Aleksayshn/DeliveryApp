import { createContext, useContext, useReducer } from "react";
import { CartContext } from "./CartContext";
import { userReducer } from "../reducer/reducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import instance from "constants/apiDefault";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, dispatch] = useReducer(userReducer, {
    isLoggedIn: false,
    user: {},
    address: [
      {
        id: "1",
        active: false,
        name: "Test User",
        mobile: "+380007777777",
        pincode: "65009",
        user_address: "65009 Odesa Ukraine",
      },
    ],
    orderHistory: [],
    token: "",
  });
  const { resetCartContext } = useContext(CartContext);
  const setLoginSuccess = (data) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  };

  const authenticateUser = async (event, email, password) => {
    event.preventDefault();
    try {
      const body = {
        email: email,
        password: password,
      };
      const {data, status} = await instance.post("/auth/login", body, {"Content-Type": "application/json"});
      const { token, user } = data.data;
      if (status === 200) {
        resetCartContext();
        setLoginSuccess(data.data);
        localStorage.setItem("token", token);
        toast.success(
          `Welcome ${
            user.firstName +
            " " +
            user.lastName
          }`,
          {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
      if (status === 401) {
        toast.error("Wrong credentials.\nInvalid email or password provided", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      if (status === 422) {
        toast.error(
          "A user account alrady exists with the provided email address",
          {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
    } catch (err) {
        toast.error("Wrong credentials.\nInvalid email or password provided", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      console.error(err);
    }
  };

  const signUpHandler = async (event, firstName, lastName, email, password) => {
    event.preventDefault();
    try {
      const body = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };

      const {status} = await instance.post("/auth/signup", body, {"Content-Type": "application/json"});

      if (status === 201) {
        resetCartContext();
        navigate("/login");

        toast.success("User created. Please login to continue", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (status === 422) {
        toast.error(
          "A user account alrady exists with the provided email address",
          {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkLogin = () => {
    return userData.isLoggedIn && localStorage.getItem("token") !== null;
  };
  const logoutHandler = () => {
    if (checkLogin()) {
      dispatch({ type: "LOGOUT_SUCCESS", payload: [] });
      localStorage.removeItem("token");
    }
  };
  const addAddressHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ADDRESS",
      payload: {
        id: Math.floor(Math.random() * 100),
        name: e.target.elements.addressname.value,
        active: false,
        mobile: e.target.elements.mobileno.value,
        pincode: e.target.elements.pincode.value,
        user_address: e.target.elements.address.value,
        user: userData.user,
      },
    });
  };

  const selectAddressHandler = (addId) => {
    dispatch({ type: "SELECT_ADDRESS", payload: addId });
  };

  const removeAddressHandler = (addId) => {
    dispatch({ type: "REMOVE_ADDRESS", payload: addId });
  };

const orderHistoryHandler = async (
  payment_id,
  amount,
  date,
  address,
  orderItems
) => {
  try {
    const token = localStorage.getItem("token");
    const auth = { 'Authorization': `Bearer ${token}` };
    const requestBody = {
      order: {
        paymentId: payment_id,
        totalAmount: amount,
        orderDate: date,
        deliveryAddress: address,
        cart: orderItems,
      }
    };

    const response = await instance.patch("/user/order", requestBody, {
      headers: {
        ...auth,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      dispatch({
        type: "ADD_ORDER",
        payload: {
          paymentId: payment_id,
          totalAmount: amount,
          orderDate: date,
          deliveryAddress: address,
          cart: orderItems,
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
};
  return (
    <AuthContext.Provider
      value={{
        setLoginSuccess,
        checkLogin,
        authenticateUser,
        logoutHandler,
        signUpHandler,
        addAddressHandler,
        selectAddressHandler,
        removeAddressHandler,
        orderHistoryHandler,
        address: userData.address,
        user: userData.user,
        orderHistory: userData.orderHistory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
