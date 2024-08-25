import React from "react";
import Image from "next/image";

const Card = ({ image, name, price, quantity = 0, des = "" }) => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={1000}
        height={1000}
        className="w-full h-full"
      />
      <div className="flex justify-between items-center absolute left-0 bottom-0 w-full h-[60px] md:h-[100px] bg-black bg-opacity-50 text-white p-2">
        <div className="font-semibold text-xl">{name}</div>
        <div className="flex flex-col justify-center items-center">
          <div>$ {price}</div>
          {quantity > 0 && <div>({quantity}pcs)</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
