import React, { useContext } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalPrice = 0;

  cartCtx.items.forEach((item) => {
    totalPrice += item.price * (item.L + item.M + item.S);
  });

  const cartItems = cartCtx.items.map((item) => (
    <CartItem key={item.id} item={item}></CartItem>
  ));

  const orderHandler = () => {
    cartCtx.clearItems();
  };

  //   const totalPrice = `$${cartCtx.totalAmount}`;
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>Total Price:</span>
        <span style={{ float: "right" }}>${totalPrice.toFixed(2)}</span>
      </div>
      <div>
        <button onClick={props.onClose}>Cancel</button>
        <button onClick={orderHandler}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
