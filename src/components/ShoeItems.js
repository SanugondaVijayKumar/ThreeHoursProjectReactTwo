import React, { useState, useContext } from "react";
import ShoeItem from "./ShoeItem";
import Card from "../UI/Card";

const ShoeItems = (props) => {
  const items = props.items;

  return (
    <Card>
      {items.map((item) => {
        return (
          <ShoeItem
            key={Math.random()}
            id={item.id}
            shoeName={item.shoeName}
            description={item.description}
            price={item.price}
            L={item.L}
            M={item.M}
            S={item.S}
            item={item}
          ></ShoeItem>
        );
      })}
    </Card>
  );
};

export default ShoeItems;
