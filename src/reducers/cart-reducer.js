const initialState = {
  cart: [],
  totalAmount: 0,
  wishlist: [],
};

const cartReducer = (state, action) => {
  let updatedCart, updatedWishlist;
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "INCREASE_QTY":
      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) return { ...item, qty: item.qty + 1 };
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    case "DECREASE_QTY":
      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.qty > 1) return { ...item, qty: item.qty - 1 };
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    case "SAVE_FOR_LATER":
      updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: updatedCart,
        wishlist: [...state.wishlist, action.payload],
      };

    case "REMOVE_FROM_CART":
      updatedCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        totalAmount: state.cart.reduce((acc, item) => {
          acc += item.qty * item.price;
          return acc;
        }, 0),
      };
    case "REMOVE_FROM_WISHLIST":
      updatedWishlist = state.wishlist.filter((item) => item.id !== action.payload);

      return {
        ...state,
        wishlist: updatedWishlist,
      };

    default:
      return state;
  }
};

export { initialState, cartReducer };
