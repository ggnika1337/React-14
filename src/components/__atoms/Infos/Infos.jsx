import React, { useReducer } from "react";

function Infos({ Company, Name, Description, Price, Discount, OldPrice }) {
  return (
    <>
      <div className="max-w-[445px] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <span className="text-[#FF7E1B] text-[15px] font-[700]">
            {Company}
          </span>
          <h1 className="text-[#1D2026] text-[40px] font-[700] max-md:text-[20px]">
            {Name}
          </h1>
          <span className="text-[#69707D] text-[16px] font-[400]">
            {Description}
          </span>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[15px]">
            <h1 className="text-[#1D2026] font-[700] text-[28px]">
              {"$" + Price + ".00"}
            </h1>
            <div className="flex justify-center items-center bg-[#FFEEE2] rounded-[6px] w-[51px]">
              <h1 className="text-[#FF7E1B] text-[16px] font-[700]">
                {Discount + "%"}
              </h1>
            </div>
          </div>
          <h1 className="line-through text-[#B6BCC8] font-[700] text-[16px]">
            {"$" + OldPrice + ".00"}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Infos;
