import React, { useContext, useState, useEffect } from "react";
import Button from "../UI/Button";
import CartContext from "../store/cart-context";

const ShoeItem = (props) => {
  const [L, setL] = useState(props.L);
  const [M, setM] = useState(props.M);
  const [S, setS] = useState(props.S);

  const [showCartL, setShowCartL] = useState(0);
  const [showCartM, setShowCartM] = useState(0);
  const [showCartS, setShowCartS] = useState(0);

  const [show, setShow] = useState(true); //for not showing if quantities becomes 0

  const cartCtx = useContext(CartContext);

  const LHandler = () => {
    if (L > 0) {
      console.log("L executing");
      setShowCartL(showCartL + 1);
      let obj = {
        ...props.item,
        L: showCartL + 1,
        M: showCartM,
        S: showCartS,
        size: "L",
      };
      cartCtx.addItem(obj);
      setL(L - 1);
    }
    if (L === 0 && M === 0 && S === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const MHandler = () => {
    if (M > 0) {
      console.log("M executing");
      setShowCartM(showCartM + 1);
      let obj = {
        ...props.item,
        L: showCartL,
        M: showCartM + 1,
        S: showCartS,
        size: "M",
      };
      cartCtx.addItem(obj);
      setM(M - 1);
    }
    if (L === 0 && M === 0 && S === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const SHandler = () => {
    if (S > 0) {
      console.log("S executing");
      setShowCartS(showCartS + 1);
      let obj = {
        ...props.item,
        L: showCartL,
        M: showCartM,
        S: showCartS + 1,
        size: "S",
      };
      cartCtx.addItem(obj);
      setS(S - 1);
    }
    if (L === 0 && M === 0 && S === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (L === 0 && M === 0 && S === 0) {
      setShow(false);
    }
  }, [L, M, S]);

  return (
    <>
      <div>
        {show && (
          <div>
            {props.shoeName} {props.description} {props.price}
            <button onClick={LHandler} value={L}>
              L:{L}
            </button>
            <button onClick={MHandler} value={M}>
              M:{M}
            </button>
            <button onClick={SHandler} value={S}>
              S:{S}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoeItem;
