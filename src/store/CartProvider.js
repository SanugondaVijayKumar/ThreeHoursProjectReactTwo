import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      let updatedItem;
      if (action.item.size === "L") {
        console.log("L exec");
        updatedItem = { ...existingItem, L: existingItem.L + 1 };
        // existingItem.L+=1;
      } else if (action.item.size === "M") {
        console.log("M exec");
        updatedItem = { ...existingItem, M: existingItem.M + 1 };
        // existingItem.M+=1;
      } else if (action.item.size === "S") {
        console.log("S exec");
        updatedItem = { ...existingItem, S: existingItem.S + 1 };
        // existingItem.S+=1;
      }
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount = 0;
    //   state.totalAmount +
    //   action.item.price * (action.item.L + action.item.M + action.item.S);

    //const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return {
      items: [],
      totalAmount: 0,
    };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const clearItemsFromCart = () => {
    dispatchCartAction({
      type: "CLEAR",
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    clearItems: clearItemsFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
