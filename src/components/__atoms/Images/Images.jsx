import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import ShoeOne from "../../../assets/Images/Shoe/ShoeOne.png";
import ShoeTwo from "../../../assets/Images/Shoe/ShoeTwo.png";
import ShoeThree from "../../../assets/Images/Shoe/ShoeThree.png";
import ShoeFour from "../../../assets/Images/Shoe/ShoeFour.png";

function Images({ One, Two, Three, Four }) {
  const [toggler, setToggler] = useState(false);
  const [mainImg, setMainImg] = useState(ShoeOne);
  const [isActiveOne, setIsActiveOne] = useState(true);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThre] = useState(false);
  const [isActiveFour, setIsActiveFour] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-[32px]">
        <button onClick={() => setToggler(!toggler)}>
          <img src={mainImg} className="size-[445px]" />
        </button>
        <div className="flex justify-between">
          <img
            src={ShoeOne}
            className="size-[88px] rounded-[13px]"
            style={{
              border: isActiveOne ? "3px solid #FF7E1B" : "none",
              opacity: isActiveOne ? 0.5 : 1,
            }}
            onClick={() => {
              setIsActiveOne(true);
              setIsActiveTwo(false);
              setIsActiveThre(false);
              setIsActiveFour(false);
              setMainImg(ShoeOne);
            }}
          />
          <img
            src={ShoeTwo}
            className="size-[88px] rounded-[13px]"
            style={{
              border: isActiveTwo ? "3px solid #FF7E1B" : "none",
              opacity: isActiveTwo ? 0.5 : 1,
            }}
            onClick={() => {
              setIsActiveOne(false);
              setIsActiveTwo(true);
              setIsActiveThre(false);
              setIsActiveFour(false);
              setMainImg(ShoeTwo);
            }}
          />
          <img
            src={ShoeThree}
            className="size-[88px] rounded-[13px]"
            style={{
              border: isActiveThree ? "3px solid #FF7E1B" : "none",
              opacity: isActiveThree ? 0.5 : 1,
            }}
            onClick={() => {
              setIsActiveOne(false);
              setIsActiveTwo(false);
              setIsActiveThre(true);
              setIsActiveFour(false);
              setMainImg(ShoeThree);
            }}
          />
          <img
            src={ShoeFour}
            className="size-[88px] rounded-[13px]"
            style={{
              border: isActiveFour ? "3px solid #FF7E1B" : "none",
              opacity: isActiveFour ? 0.5 : 1,
            }}
            onClick={() => {
              setIsActiveOne(false);
              setIsActiveTwo(false);
              setIsActiveThre(false);
              setIsActiveFour(true);
              setMainImg(ShoeFour);
            }}
          />
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://i.imgur.com/fsyrScY.jpg",
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      />
    </>
  );
}

export default Images;
