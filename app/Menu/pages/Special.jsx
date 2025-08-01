import React from "react";
import Image from "next/image";

const Special = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      {/* Fuji Mixed Nigiri */}
      <Image
        src="/menu_images/special/special_1.webp"
        width={1000}
        height={1000}
        className="w-[100vw]"
      />
      {/* Fuji Mixed Nigiri */}
      <Image
        src="/menu_images/special/special_2.webp"
        width={1000}
        height={1000}
        className="w-[100vw]"
      />
      <Image
        src="/menu_images/special/special_3.webp"
        width={1000}
        height={1000}
        className="w-[100vw]"
      />
      <Image
        src="/menu_images/special/special_4.webp"
        width={1000}
        height={1000}
        className="w-[100vw] mb-[40px]"
      />
    </div>
  );
};

export default Special;
