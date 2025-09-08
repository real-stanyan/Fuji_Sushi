import React from "react";
import Image from "next/image";

const Beer = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      {/* Fuji Mixed Nigiri */}
      <Image
        src="/menu_images/beer_menu/beer.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[2vw] mb-[40px]"
      />
    </div>
  );
};

export default Beer;
