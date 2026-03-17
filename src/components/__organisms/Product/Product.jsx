import React, { createContext, useState } from "react";
import Button from "../../__atoms/Button/Button";
import Infos from "../../__atoms/Infos/Infos";
import Images from "../../__atoms/Images/Images";

function Product() {
  function Plus() {
    setCount(count + 1);
  }
  function Minus() {
    if (count === 0) return;
    setCount(count - 1);
  }
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count") || 0);
  });
  localStorage.setItem("count", count || 0);

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
          <Button Count={count} Plus={Plus} Minus={Minus} />
        </div>
      </div>
    </>
  );
}

export default Product;
