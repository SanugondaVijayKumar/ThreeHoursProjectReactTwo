import React from "react";

const CartItem = (props) => {
  const item = props.item;
  console.log("item=", item);
  const individualTotalPrice = item.price * (item.L + item.M + item.S);
  return (
    <div>
      <span>{item.shoeName}-</span>
      <span>{item.description}-</span>
      <span>${item.price}-</span>
      <span>L: {item.L} - </span>
      <span>M: {item.M} - </span>
      <span>S: {item.S}</span>

      <span style={{ float: "right" }}>{individualTotalPrice}</span>
    </div>
  );
};

export default CartItem;
