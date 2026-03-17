import React from "react";

function Burger({ isOpen, Ref, SelectClick }) {
  return (
    <>
      <div
        className="flex flex-col gap-[20px] pt-[120px] px-[50px] absolute bg-white w-[70vw] h-full"
        style={{ left: isOpen ? "0px" : "-100%" }}
        ref={Ref}
      >
        <h1
          onClick={SelectClick}
          className="cursor-pointer font-[700] text-[18px]"
        >
          Collections
        </h1>
        <h1
          onClick={SelectClick}
          className="cursor-pointer font-[700] text-[18px]"
        >
          Men
        </h1>
        <h1
          onClick={SelectClick}
          className="cursor-pointer font-[700] text-[18px]"
        >
          Women
        </h1>
        <h1
          onClick={SelectClick}
          className="cursor-pointer font-[700] text-[18px]"
        >
          About
        </h1>
        <h1
          onClick={SelectClick}
          className="cursor-pointer font-[700] text-[18px]"
        >
          Contact
        </h1>
      </div>
    </>
  );
}

export default Burger;
