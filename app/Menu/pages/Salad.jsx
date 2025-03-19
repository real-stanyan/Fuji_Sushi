import React from "react";
import Image from "next/image";

const Salad = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_title/salad.webp"
        width={1000}
        height={1000}
        className="w-[70vw] mb-[40px]"
      />
      {/* Green Seaweed Salad */}
      <Image
        src="/menu_images/salad/green_seaweed_salad.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[4vw] mb-[30px]"
      />
      {/* Salmon Avocado Salad */}
      <Image
        src="/menu_images/salad/salmon_avocado_salad.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[4vw] mb-[30px]"
      />
      {/* Chicken Katsu Salad */}
      <Image
        src="/menu_images/salad/chicken_katsu_salad.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[4vw] mb-[30px]"
      />
      {/* Chicken Karaage Salad */}
      <Image
        src="/menu_images/salad/chicken_karaage_salad.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[4vw] mb-[30px]"
      />
    </div>
  );
};

export default Salad;
