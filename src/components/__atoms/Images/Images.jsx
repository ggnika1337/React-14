import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import ShoeOne from "../../../assets/Images/Shoe/ShoeOne.png";
import ShoeTwo from "../../../assets/Images/Shoe/ShoeTwo.png";
import ShoeThree from "../../../assets/Images/Shoe/ShoeThree.png";
import ShoeFour from "../../../assets/Images/Shoe/ShoeFour.png";

import Left from "../../../assets/Images/LeftArrow.svg";
import Right from "../../../assets/Images/RightArrow.svg";

const images = [ShoeOne, ShoeTwo, ShoeThree, ShoeFour];

function Images() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggler, setToggler] = useState(false);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col gap-[32px] max-md:w-full">
      <div className="relative">
        <button onClick={() => setToggler(!toggler)} className="hidden md:flex">
          <img
            src={images[activeIndex]}
            className="size-[445px] max-md:w-full"
          />
        </button>
        <img
          src={images[activeIndex]}
          className="size-[445px] md:hidden max-md:w-full"
        />

        <button
          onClick={prev}
          className="size-[56px] absolute left-2 top-50 items-center justify-center bg-white rounded-full p-2 shadow hidden max-md:flex"
        >
          <img src={Left} alt="" />
        </button>
        <button
          onClick={next}
          className="size-[56px] absolute right-2 top-50 items-center justify-center bg-white rounded-full p-2 shadow hidden max-md:flex"
        >
          <img src={Right} alt="" />
        </button>
      </div>

      <div className="flex justify-between max-md:hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="size-[88px] rounded-[13px] cursor-pointer max-md:rounded"
            style={{
              border: activeIndex === i ? "3px solid #FF7E1B" : "none",
              opacity: activeIndex === i ? 0.5 : 1,
            }}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      <FsLightbox toggler={toggler} sources={images} />
    </div>
  );
}

export default Images;
