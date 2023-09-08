import React from "react";
import Cart from "../Cart/Cart";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <h2>Shoe Commerce Platform</h2>
      <span>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </span>
    </>
  );
};

export default Header;
