import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import AddShoeItem from "./components/AddShoeItem";
import Header from "./Layout/Header";
import ShoeItems from "./components/ShoeItems";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [shoeList, setShoeList] = useState([]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const formDataHandler = (item) => {
    setShoeList([...shoeList, item]);
    console.log("In App.js file");
    console.log(item);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <AddShoeItem formData={formDataHandler}></AddShoeItem>
      <ShoeItems items={shoeList}></ShoeItems>
    </CartProvider>
  );
}

export default App;
