import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../db/products.json";
import { initialState, productReducer } from "../reducers/product-reducer";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: data.products });
  }, []);

  return <ProductContext.Provider value={{ ...state }}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => useContext(ProductContext);
