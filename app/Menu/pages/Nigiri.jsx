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
      <Image
        src="/menu_images/nigiri/salmon.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Tuna */}
      <Image
        src="/menu_images/nigiri/tuna.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* King Fish */}
      <Image
        src="/menu_images/nigiri/king_fish.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Scallop */}
      <Image
        src="/menu_images/nigiri/scallop.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Ika (Squid) */}
      <Image
        src="/menu_images/nigiri/ika.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Ika (Squid) */}
      <Image
        src="/menu_images/nigiri/ebi.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Unagi (Eel) */}
      <Image
        src="/menu_images/nigiri/unagi.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Tobikko Gunkan (Flying fish roe) */}
      <Image
        src="/menu_images/nigiri/tobikko_gunkan.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Avocado */}
      <Image
        src="/menu_images/nigiri/avocado.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Grilled Salmon */}
      <Image
        src="/menu_images/nigiri/grilled_salmon.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Grilled Scallop */}
      <Image
        src="/menu_images/nigiri/grilled_scallop.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Grilled Ebi (Prawn) */}
      <Image
        src="/menu_images/nigiri/grilled_ebi.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
    </div>
  );
};

export default Nigiri;
