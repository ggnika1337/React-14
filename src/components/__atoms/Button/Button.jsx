import React from "react";
import Cart from "../../../assets/Images/CartWhite.svg";

function Button({ Count, Plus, Minus, Click }) {
  return (
    <>
      <div className="flex gap-[16px]">
        <div className="flex gap-[45px] py-[17px] px-[20px] rounded-[10px] bg-[#F6F8FD]">
          <h1
            onClick={Minus}
            className="text-[#FF7E1B] text-[40px] font-[700] cursor-pointer hover:opacity-50"
          >
            -
          </h1>
          <h1 className="text-[25px] font-[700] flex items-center text-[#1D2026]">
            {Count}
          </h1>
          <h1
            onClick={Plus}
            className="text-[#FF7E1B] text-[37px] font-[700] cursor-pointer hover:opacity-50"
          >
            +
          </h1>
        </div>
        <button
          onClick={Click}
          className="py-[22px] px-[77px] flex gap-[15px] text-white bg-[#FF7E1B] rounded-[10px] items-center cursor-pointer font-[700] text-[16px] hover:bg-[#FFAB6A]"
        >
          <img src={Cart} className="size-[17px]" />
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Button;
