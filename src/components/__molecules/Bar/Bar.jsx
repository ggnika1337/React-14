import React, { createContext, useRef, useState } from "react";
import Cart from "../../../assets/Images/Cart.svg";
import Pfp from "../../../assets/Images/Pfp.svg";
import Sneakers from "../../../assets/Images/SneakersHeader.svg";
import Burger from "../Burger/Burger";

export const BurgerContext = createContext();

function Bar() {
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
      <BurgerContext.Provider value={door}>
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
      </BurgerContext.Provider>
    </>
  );
}

export default Bar;
