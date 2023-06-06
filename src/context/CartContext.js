import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/reducer";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(cartReducer, {
    cart: [],
    wishlist: [],
    filter: {
      category: [],
      userRating: null,
      sortby: null,
      searchQuery: "",
      price: 2000,
    },
  });

  const addToCart = async (userProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: userProduct });
  };

  const addToWishList = async (userProduct) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: userProduct });
  };

  const removeFromCart = async (userProduct) => {
    dispatch({ type: "REMOVE_CART", payload: userProduct });
  };

  const removeMultipleFromCart = (cartArray) => {
    cartArray.forEach((item) => {
      removeFromCart(item);
    });
  };

  const removeFromWishlist = async (userProduct) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: userProduct });
  };

  const updateQuantityCart = async (userProduct, userAction) => {
        userAction === "increment"
          ? dispatch({ type: "INCREMENT_CART", payload: userProduct })
          : dispatch({ type: "DECREMENT_CART", payload: userProduct });
      }
   
  const getCartCount = () => {
    return cartData.cart.length;
  };
  const getWishlistCount = () => {
    return cartData.wishlist.length;
  };

  const getTotalPrice = () => {
    return cartData.cart.reduce(
      (acc, { discounted_price, qty }) => acc + Number(discounted_price) * qty,
      0
    );
  };

  const getTotalDiscount = () => {
    return (
      cartData.cart.reduce(
        (acc, { price, qty }) => acc + Number(price) * qty,
        0
      ) - getTotalPrice()
    );
  };

  const isProductInCart = (productId) => {
    return cartData.cart.find(({ _id }) => _id === productId);
  };

  const isProductInWihlist = (productId) => {
    return cartData.wishlist.find(({ _id }) => _id === productId);
  };

  const toggleWishlist = (userProduct) => {
    isProductInWihlist(userProduct._id)
      ? removeFromWishlist(userProduct)
      : addToWishList(userProduct);
  };

  const addFilterCategory = (category) => {
    dispatch({ type: "FILTER_CATEGORY", payload: category });
  };

  const addFilterRange = (e) => {
    dispatch({ type: "FILTER_PRICE", payload: Number(e.target.value) });
  };

  const addFilterRating = (e) => {
    if (e.target.checked) {
      dispatch({ type: "FILTER_RATING", payload: Number(e.target.value) });
    }
  };

  const addFilterSortby = (e) => {
    if (e.target.checked) {
      dispatch({ type: "FILTER_SORTBY", payload: e.target.value });
    }
  };

  const addFilterQuery = (e) => {
    dispatch({ type: "FILTER_QUERY", payload: e.target.value });
  };

  const clearFilter = (e) => {
    dispatch({ type: "CLEAR_FILTER", payload: {} });
    e.preventDefault();
  };
  const clearCategory = () => {
    dispatch({ type: "CLEAR_CATEGORY", payload: [] });
  };
  const resetCartContext = () => {
    dispatch({ type: "RESET_CART_WISHLIST", payload: [] });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: [] });
  };



  return (
    <CartContext.Provider
      value={{
        addToCart,
        addToWishList,
        removeFromCart,
        removeMultipleFromCart,
        removeFromWishlist,
        updateQuantityCart,
        getCartCount,
        resetCartContext,
        clearCart,
        toggleWishlist,
        getWishlistCount,
        getTotalPrice,
        getTotalDiscount,
        isProductInCart,
        isProductInWihlist,
        addFilterCategory,
        addFilterRange,
        addFilterRating,
        addFilterSortby,
        addFilterQuery,
        clearFilter,
        clearCategory,
        cart: cartData.cart,
        wishlist: cartData.wishlist,
        range: cartData.filter.price,
        filter: cartData.filter,
        searchQuery: cartData.filter.searchQuery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};