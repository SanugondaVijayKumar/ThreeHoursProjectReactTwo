import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  size: "",
  addItem: () => {},
});

export default CartContext;
