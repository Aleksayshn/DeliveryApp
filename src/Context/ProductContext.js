import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/reducer";
import instance from "constants/apiDefault";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [productData, dispatch] = useReducer(productReducer, {
    categories: [],
    products: [],
  });
  const getProductData = async () => {
    try {
      const categoryData = await instance.get("/categories");
      const productData = await instance.get("/products");
      dispatch({ type: "SET_CATEGORY", payload: categoryData.data });
      dispatch({ type: "SET_PRODUCT", payload: productData.data });
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
