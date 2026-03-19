import React, { createContext, useReducer, useState } from "react";
import Button from "../../__atoms/Button/Button";
import Infos from "../../__atoms/Infos/Infos";
import Images from "../../__atoms/Images/Images";
// import Bar from "../../__molecules/Bar/Bar";

function Product({ Plus, Minus, Count, Click }) {
  return (
    <>
      <div className="flex justify-evenly w-full max-md:flex-col max-md:gap-5">
        <Images />
        <div className="flex gap-[32px] flex-col max-md:px-[24px]">
          <Infos
            OldPrice={250}
            Discount={50}
            Price={125}
            Company={"SNEAKER COMPANY"}
            Name={"Fall Limited Edition Sneakers"}
            Description={
              "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
            }
          />
          <Button Count={Count} Plus={Plus} Minus={Minus} Click={Click} />
        </div>
      </div>
    </>
  );
}

export default Product;
