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
      <Image
        src="/menu_images/Sashimi/salmon_sashimi.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Tuna Sashimi */}
      <Image
        src="/menu_images/Sashimi/tuna_sashimi.webp"
        width={1000}
        height={200}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Kingfish Sashimi */}
      <Image
        src="/menu_images/Sashimi/kingfish_sashimi.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      {/* Sashimi Entree */}
      <Image
        src="/menu_images/Sashimi/sashimi_entree.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[50px]"
      />
    </div>
  );
};

export default Sashimi;
