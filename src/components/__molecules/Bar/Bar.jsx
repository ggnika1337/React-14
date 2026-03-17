import React, { createContext, useRef, useState } from "react";
import Cart from "../../../assets/Images/Cart.svg";
import Pfp from "../../../assets/Images/Pfp.svg";
import Sneakers from "../../../assets/Images/SneakersHeader.svg";
import Burger from "../Burger/Burger";
import Trash from "../../../assets/Images/Trash.svg";
import Img from "../../../assets/Images/Shoe/ShoeOne.png";

function Bar() {
  const [showCart, setShowCart] = useState(false);
  const [isShown, setIsShown] = useState(() => {
    if (localStorage.getItem("count") === "0") {
      return false;
    } else {
      return true;
    }
  });
  console.log(isShown);
  console.log(localStorage.getItem("count"));
  const [door, setDoor] = useState(false);

  const boxEl = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleOutsideClick(event) {
    if (boxEl.current && !boxEl.current.contains(event.target)) {
      setIsVisible(false);
    }
  }

  document.addEventListener("mousedown", handleOutsideClick);

  return (
    <>
      <Burger
        isOpen={door}
        Ref={boxEl}
        SelectClick={() => {
          setDoor(false);
          setBarOpacity(0);
        }}
      />
      <div className="border-b border-[#E4E9F2] w-full max-w-[1110px] h-[112px] flex justify-between items-center">
        <div className="flex gap-[56px] h-full items-center flex-row">
          <div className="flex gap-[16px]">
            <div
              className="gap-[3px] flex flex-col relative pt-[5px] hidden max-md:flex"
              onClick={() => {
                if (door === false) {
                  setDoor(true);
                } else {
                  setDoor(false);
                }
              }}
            >
              <div
                style={{
                  transform: door ? "rotate(45deg)" : "rotate(0deg)",
                }}
                className="w-[24px] h-[3px] bg-black"
              ></div>
              <div
                style={{
                  transform: door ? "rotate(-45deg)" : "rotate(0deg)",
                  bottom: door ? "11px" : "0px",
                  position: door ? "absolute" : "relative",
                }}
                className="w-[24px] h-[3px] bg-black"
              ></div>
              <div
                style={{
                  opacity: door ? "0" : "1",
                }}
                className="w-[24px] h-[3px] bg-black"
              ></div>
            </div>
            <img src={Sneakers} className="w-[137px] h-[20px]" />
          </div>
          <div className="text-[15px] font-[400] text-[#69707D] h-full items-center flex gap-[30px] max-md:hidden">
            <div className="hover:text-black border-[#FF7E1B] hover:border-b-[4px] h-full pt-[45px] cursor-pointer transition-none">
              <h1>Collections</h1>
            </div>
            <div className="hover:text-black border-[#FF7E1B] hover:border-b-[4px] h-full pt-[45px] cursor-pointer transition-none">
              <h1>Men</h1>
            </div>
            <div className="hover:text-black border-[#FF7E1B] hover:border-b-[4px] h-full pt-[45px] cursor-pointer transition-none">
              <h1>Women</h1>
            </div>
            <div className="hover:text-black border-[#FF7E1B] hover:border-b-[4px] h-full pt-[45px] cursor-pointer transition-none">
              <h1>About</h1>
            </div>
            <div className="hover:text-black border-[#FF7E1B] hover:border-b-[4px] h-full pt-[45px] cursor-pointer transition-none">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-[40px]">
          <div className="flex items-center relative">
            <div className="absolute right-[-7px] top-[10px] w-[19px] h-[13px] bg-[#FF7E1B] rounded-[7px] flex items-center justify-center z-10">
              <h1 className="text-white text-[10px]">
                {localStorage.getItem("count")}
              </h1>
            </div>
            <img
              onClick={() => {
                if (showCart === false) {
                  setShowCart(true);
                } else {
                  setShowCart(false);
                }
              }}
              src={Cart}
              className={`cursor-pointer opacity-50 hover:opacity-100`}
            />
          </div>
          <div className="size-[50px] hover:border-[2px] border-[#FF7E1B] rounded-full transition-none max-md:size-[24px]">
            <img src={Pfp} className="w-full h-full" />
          </div>
        </div>
      </div>

      <div
        style={{ display: showCart ? "flex" : "none" }}
        className="absolute top-[95px] right-[90px] w-[360px] h-[256px] flex flex-col gap-[25px] bg-white px-[24px] py-[28px] shadow-[0px_20px_50px_-20px_#1D202680] rounded-[10px]"
      >
        <h1 className="font-[700] text-[16px] text-[#1D2026]">Cart</h1>
        <div className="w-full h-[1px] bg-[#E4E9F2]"></div>
        <h1
          style={{ display: isShown ? "none" : "flex" }}
          className="w-full h-full flex items-center justify-center text-[#69707D] font-[700] text-[16px]"
        >
          Your cart is empty.
        </h1>
        <div
          className="flex justify-between gap-[16px] items-center"
          style={{ display: isShown ? "flex" : "none" }}
        >
          <img src={Img} className="size-[50px] " />
          <div className="flex flex-col gap-[3px]">
            <span className="text-[#69707D] font-[400] text-[16px] whitespace-nowrap">
              Fall Limited Edition Sneakers
            </span>
            <div className="flex gap-[5px]">
              <span>$125.00 x {localStorage.getItem("count")}</span>
              <span>{"$" + 125 * localStorage.getItem("count") + ".00"}</span>
            </div>
          </div>
          <img
            onClick={() => {
              setIsShown(false);
              localStorage.setItem("count", 0);
            }}
            src={Trash}
            className="size-[16px] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Bar;
