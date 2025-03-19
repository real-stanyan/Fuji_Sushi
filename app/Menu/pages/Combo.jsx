import React from "react";
import Image from "next/image";

const Combo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center pt">
      <Image
        src="/menu_title/combo.webp"
        width={1000}
        height={1000}
        className="w-[70vw] ml-[10vw] mb-[50px]"
      />
      {/* Fuji Mixed Nigiri */}
      <div className="relative w-[100vw] flex pr-[8vw] mb-[40px]">
        <Image
          src="/menu_images/hr.webp"
          width={1000}
          height={200}
          className="absolute bottom-1 pl-[50px] z-0"
        />
        <Image
          src="/menu_images/combo/fuji_mixed_nigiri.webp"
          width={1000}
          height={1000}
          className="w-[55%] z-10"
        />
        <div className="w-[45%] flex flex-col justify-end pb-[15px]">
          <div className="font-pwc text-[#070707] text-2xl whitespace-nowrap">
            <h1>Fuji Mixed Nigiri</h1>
            <h1>
              <span className="text-xl">(5pcs)</span>
              <span className="text-[#c22d25] pl-[4px] text-xl">(gf)</span>
              <span className="text-[#c22d25] pl-[25px] text-xl">$18</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Fuji Mixed Nigiri */}
      <div className="relative w-[100vw] flex mb-[40px] px-[5vw]">
        <Image
          src="/menu_images/hr.webp"
          width={1000}
          height={200}
          className="absolute bottom-10 z-0"
        />
        <div className="w-[45%] flex flex-col justify-start pt-[20px]">
          <div className="font-pwc text-[#070707] text-2xl whitespace-nowrap">
            <h1>Fuji Mixed Nigiri</h1>
            <h1>
              <span className="text-xl">(10pcs)</span>
              <span className="text-[#c22d25] pl-[25px] text-xl">$28</span>
            </h1>
          </div>
        </div>
        <Image
          src="/menu_images/combo/fuji_mixed_nigiri_10.webp"
          width={1000}
          height={1000}
          className="w-[55%] z-10"
        />
      </div>
    </div>
  );
};

export default Combo;
