import React from "react";
import Cart from "../../../assets/Images/Cart.svg";
import Pfp from "../../../assets/Images/Pfp.svg";

function Bar() {
  return (
    <>
      <div className="border-b border-[#E4E9F2] w-full h-[112px]">
        <div>
          <h1></h1>
          <div></div>
        </div>
        <div className="flex gap-[40px] ">
          <img
            src={Cart}
            className={`cursor-pointer opacity-50 hover:opacity-100`}
          />
          <div className="w-[50px] h-[50px] hover:border-[2px] border-[#FF7E1B] rounded-full transition-none">
            <img src={Pfp} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
