import React from "react";
import Image from "next/image";

const Nigiri = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_images/nigiri/full.webp"
        width={1000}
        height={1000}
        className="w-[100vw]"
      />
      <Image
        src="/menu_images/nigiri/full_2.webp"
        width={1000}
        height={1000}
        className="w-[100vw] mb-[40px]"
      />
    </div>
  );
};

export default Nigiri;
