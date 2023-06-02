import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/reducer";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [productData, dispatch] = useReducer(productReducer, {
    categories: [],
    products: [],
  });
  const getProductData = async () => {
    try {
      const categoryData = await (await fetch("https://your-delivery-by-sayshn.onrender.com/api/categories")).json();
      const productData = await (await fetch("https://your-delivery-by-sayshn.onrender.com/api/products")).json();
      dispatch({ type: "SET_CATEGORY", payload: categoryData });
      dispatch({ type: "SET_PRODUCT", payload: productData });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  const getProductDetail = (productId) => {
    return productData.products.find(({ _id }) => _id === productId);
  };
  return (
    <ProductContext.Provider
      value={{
        products: productData.products,
        categories: productData.categories,
        getProductDetail,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
