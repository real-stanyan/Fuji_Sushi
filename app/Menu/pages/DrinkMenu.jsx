import React from "react";
import Image from "next/image";

const DrinkMenu = () => {
  return (
    <div className="bg-black w-[100vw] min-h-[100vh]">
      {/* logo */}
      <div className="w-[100vw] flex justify-center items-end space-x-2 pt-[5vw] pb-[10vw]">
        <h1 className="uppercase text-[#b33229] text-3xl tracking-widest">
          DRINK
        </h1>
        <Image
          src="/menu_images/logo.webp"
          width={200}
          height={200}
          className="w-[18%]"
        />
        <h1 className="uppercase text-[#b33229] text-3xl tracking-widest">
          MENU
        </h1>
      </div>
      <Image
        src="/menu_images/drink_menu/drink_menu_1.webp"
        width={2000}
        height={2000}
        className="w-[100vw] h-auto object-contain px-[5vw] pt-[20px]"
      />
      <Image
        src="/menu_images/drink_menu/drink_menu_2.webp"
        width={2000}
        height={2000}
        className="w-[100vw] h-auto object-contain px-[5vw] pt-[20px] pb-[40px]"
      />
    </div>
  );
};

export default DrinkMenu;
