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
      <Image
        src="/menu_images/combo/fuji_mixed_nigiri_5.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[2vw] mb-[40px]"
      />
      {/* Fuji Mixed Nigiri */}
      <Image
        src="/menu_images/combo/fuji_mixed_nigiri_10.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[2vw] mb-[40px]"
      />
      {/* Sushi and sashimi combo */}
      <Image
        src="/menu_images/combo/sushi_and_sashimi_combo.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[2vw] mb-[40px]"
      />
    </div>
  );
};

export default Combo;
