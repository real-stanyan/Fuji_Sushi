import React from "react";
import Image from "next/image";

const FriedDishes = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_images/fried_dishes/full.webp"
        width={1000}
        height={1000}
        className="w-[100vw] mb-[40px]"
      />
      {/* Tempura 🍤 */}
      <Image
        src="/menu_images/fried_dishes/tempura_title.webp"
        width={1000}
        height={1000}
        className="w-[40vw] mb-[50px]"
      />
      <Image
        src="/menu_images/fried_dishes/tempura_content.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[8vw] mb-[40px]"
      />
      <Image
        src="/menu_images/fried_dishes/tempura_image.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[18vw] mb-[40px]"
      />
    </div>
  );
};

export default FriedDishes;
