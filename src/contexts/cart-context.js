import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cart-reducer";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.cart]);

  const addToCart = (item) => {
    item.qty = 1;
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const incrementCartQty = (item) => {
    dispatch({ type: "INCREASE_QTY", payload: item.id });
  };

  const decrementCartQty = (item) => {
    dispatch({ type: "DECREASE_QTY", payload: item.id });
  };

  const saveForLater = (item) => {
    delete item.qty;
    dispatch({ type: "SAVE_FOR_LATER", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };

  const removeFromWishlist = (item) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, incrementCartQty, decrementCartQty, removeFromCart, saveForLater, removeFromWishlist }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
