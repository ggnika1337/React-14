import React, { createContext, useReducer, useState } from "react";
import Button from "../../__atoms/Button/Button";
import Infos from "../../__atoms/Infos/Infos";
import Images from "../../__atoms/Images/Images";
import Bar from "../../__molecules/Bar/Bar";

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      quantity: state.quantity + 1,
    };
  } else if (action.type === "increment") {
    return {
      quantity: state.quantity - 1,
    };
  }
}

function Product() {
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });

  return (
    <>
      <div className="flex justify-evenly w-full">
        <Images />

        <div className="flex gap-[32px] flex-col">
          <Infos
            desci
            OldPrice={250}
            Discount={50}
            Price={125}
            Company={"SNEAKER COMPANY"}
            Name={"Fall Limited Edition Sneakers"}
            Description={
              "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
            }
          />
          <Button
            Count={state.quantity}
            Plus={() => {
              dispatch({ type: "increment" });
            }}
            Minus={() => {
              dispatch({ type: "decrement" });
            }}
            Click={() => {}}
          />
        </div>
      </div>
    </>
  );
}

export default Product;
