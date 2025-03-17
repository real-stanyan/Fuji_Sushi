import React from "react";
import Image from "next/image";

const Sashimi = () => {
  return (
    <div className="flex flex-col items-center pt">
      <Image
        src="/menu_title/sashimi.webp"
        width={1000}
        height={1000}
        className="w-[70vw] ml-[10vw] mb-[50px]"
      />
      {/* Salmon Sashimi */}
      <div className="w-[100vw] flex px-[8vw] mb-[40px]">
        <Image
          src="/menu_images/Sashimi/salmon_sashimi.webp"
          width={1000}
          height={1000}
          className="w-2/6"
        />
        <div className="w-4/6 flex flex-col justify-center pb-[40px]">
          <h1 className="font-pwc text-[#070707] text-2xl whitespace-nowrap">
            Salmon Sashimi
            <span className="text-[#c22d25] pl-[6px] text-xs">(gf)</span>
            <span className="text-[#c22d25] pl-[8px] text-lg">$18</span>
          </h1>
          <Image
            src="/menu_images/hr.webp"
            width={1000}
            height={200}
            className="ml-2/6"
          />
        </div>
      </div>
      {/* Tuna Sashimi */}
      <div className="w-[100vw] flex px-[8vw] mb-[40px]">
        <div className="w-4/6 flex flex-col justify-center pb-[30px]">
          <h1 className="font-pwc text-[#070707] text-2xl whitespace-nowrap">
            Tuna Sashimi
            <span className="text-[#c22d25] pl-[6px] text-xs">(gf)</span>
            <span className="text-[#c22d25] pl-[8px] text-lg">$19</span>
          </h1>
          <Image
            src="/menu_images/hr.webp"
            width={1000}
            height={200}
            className="ml-2/6"
          />
        </div>
        <Image
          src="/menu_images/Sashimi/tuna_sashimi.webp"
          width={1000}
          height={1000}
          className="w-2/6"
        />
      </div>
      {/* Kingfish Sashimi */}
      <div className="w-[100vw] flex px-[8vw] mb-[40px]">
        <Image
          src="/menu_images/Sashimi/kingfish_sashimi.webp"
          width={1000}
          height={1000}
          className="w-2/6"
        />
        <div className="w-4/6 flex flex-col justify-center pb-[40px] space-y-1">
          <h1 className="font-pwc text-[#070707] text-2xl whitespace-nowrap">
            Kingfish Sashimi
            <span className="text-[#c22d25] pl-[6px] text-xs">(gf)</span>
            <span className="text-[#c22d25] pl-[8px] text-lg">$19</span>
          </h1>
          <Image
            src="/menu_images/hr.webp"
            width={1000}
            height={200}
            className="ml-2/6"
          />
        </div>
      </div>
      {/* Sashimi Entree */}
      <div className="w-[100vw] flex px-[8vw] mb-[40px]">
        <div className="w-4/6 flex flex-col justify-center pb-[30px] space-y-1">
          <h1 className="font-pwc text-[#070707] text-2xl whitespace-nowrap">
            Sashimi Entree
            <span className="text-[#c22d25] pl-[6px] text-xs">(gf)</span>
            <span className="text-[#c22d25] pl-[8px] text-lg">$28</span>
          </h1>
          <p className="font-pwc text-[#c22d25] tracking-tight text-md">
            (6pc Sal, 3pc Tuna, 1 Scallop)
          </p>
          <Image
            src="/menu_images/hr.webp"
            width={1000}
            height={200}
            className="ml-2/6"
          />
        </div>
        <Image
          src="/menu_images/Sashimi/sashimi_entree.webp"
          width={1000}
          height={1000}
          className="w-2/6"
        />
      </div>
    </div>
  );
};

export default Sashimi;
