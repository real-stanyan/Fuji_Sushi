import React from "react";
import Image from "next/image";

const Nigiri = () => {
  return (
    <div className="flex flex-col items-center pt">
      <Image
        src="/menu_title/nigiri.webp"
        width={1000}
        height={1000}
        className="w-[70vw] ml-[5vw] mb-[50px]"
      />
      {/* Salmon */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/salmon.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            Salmon<span className="text-[#c22d25] text-sm ml-[5px]">(gf)</span>
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$5.5</h1>
      </div>
      {/* Tuna */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/tuna.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            Tuna<span className="text-[#c22d25] text-sm ml-[5px]">(gf)</span>
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$6</h1>
      </div>
      {/* King Fish */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/king_fish.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            King Fish
            <span className="text-[#c22d25] text-sm ml-[5px]">(gf)</span>
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$6</h1>
      </div>
      {/* Scallop */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/scallop.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            Scallop
            <span className="text-[#c22d25] text-sm ml-[5px]">(gf)</span>
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$6.5</h1>
      </div>
      {/* Ika (Squid) */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/ika.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            Ika (Squid)
            <span className="text-[#c22d25] text-sm ml-[5px]">(gf)</span>
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$5</h1>
      </div>
      {/* Ika (Squid) */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/ebi.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            Ebi (Prawn)
            <span className="text-[#c22d25] text-sm ml-[5px]">(gf)</span>
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$5</h1>
      </div>
      {/* Unagi (Eel) */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/unagi.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            Unagi (Eel)
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$7.5</h1>
      </div>
      {/* Tobikko Gunkan (Flying fish roe) */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/tobikko_gunkan.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <span className="flex items-center whitespace-nowrap text-[#070707] text-xl ml-[15px]">
            <h1 className="flex flex-col justify-center items-start">
              <span>Tobikko Gunkan</span>
              <span>(Flying fish roe)</span>
            </h1>
            <span className="text-[#c22d25] text-sm ml-[5px] -mt-[20px]">
              (gf)
            </span>
          </span>
        </div>

        <h1 className="text-[#070707] text-lg">$5</h1>
      </div>
      {/* Avocado */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/avocado.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-3xl ml-[15px]">
            Avocado
            <span className="text-[#c22d25] text-sm ml-[5px]">(gf)</span>
            <span className="text-[#c22d25] text-sm ml-[5px]">(v)</span>
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$4.5</h1>
      </div>
      {/* Grilled Salmon */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/grilled_salmon.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-2xl ml-[15px]">
            Grilled Salmon
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$6.5</h1>
      </div>
      {/* Grilled Scallop */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/grilled_scallop.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text-2xl ml-[15px]">
            Grilled Scallop
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$7.5</h1>
      </div>
      {/* Grilled Ebi (Prawn) */}
      <div className="flex items-center font-pwc w-[100vw] px-[8vw] justify-between mb-[40px]">
        <div className="flex items-center w-[80%]">
          <Image
            src="/menu_images/nigiri/grilled_ebi.webp"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
          <h1 className="whitespace-nowrap text-[#070707] text- xl ml-[15px]">
            Grilled Ebi (Prawn)
          </h1>
        </div>

        <h1 className="text-[#070707] text-lg">$6</h1>
      </div>
    </div>
  );
};

export default Nigiri;
