import React from "react";
import Image from "next/image";

const SakeMenu = () => {
  return (
    <div className="bg-black w-[100vw] min-h-[100vh]">
      {/* logo */}
      <div className="w-[100vw] flex justify-center items-end space-x-2 pt-[5vw] pb-[5vw]">
        <h1 className="uppercase text-[#b33229] text-3xl tracking-widest">
          SAKE
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
        src="/menu_images/sake_menu/sake_menu_sublogo.webp"
        width={500}
        height={500}
        className="w-[35vw] mx-auto pb-[10vw]"
      />
      <Image
        src="/menu_images/sake_menu/sake_menu_1.webp"
        width={2000}
        height={2000}
        className="px-[10vw] mb-[40px]"
      />
      <Image
        src="/menu_images/sake_menu/sake_menu_2.webp"
        width={2000}
        height={2000}
        className="px-[10vw] mb-[40px]"
      />
      <Image
        src="/menu_images/sake_menu/sake_menu_3.webp"
        width={2000}
        height={2000}
        className="px-[10vw] pb-[40px]"
      />
    </div>
  );
};

export default SakeMenu;
