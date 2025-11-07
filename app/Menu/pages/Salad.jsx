import React from "react";
import Image from "next/image";

const Salad = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_images/salad/full.webp"
        width={1000}
        height={1000}
        className="w-[100vw] mb-[40px]"
      />
    </div>
  );
};

export default Salad;
