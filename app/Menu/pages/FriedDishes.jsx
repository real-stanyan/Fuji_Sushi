import React from "react";
import Image from "next/image";

const FriedDishes = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_title/fried_dishes.webp"
        width={1000}
        height={1000}
        className="w-[70vw] mb-[50px]"
      />
      {/* layer 1 */}
      <Image
        src="/menu_images/fried_dishes/layer_1.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[6vw] mb-[20px]"
      />
      <Image
        src="/menu_images/hr.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[5vw] mb-[20px]"
      />
      {/* layer 2 */}
      <Image
        src="/menu_images/fried_dishes/layer_2.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[6vw] mb-[20px]"
      />
      <Image
        src="/menu_images/hr.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[5vw] mb-[20px]"
      />
      {/* layer 3 */}
      <Image
        src="/menu_images/fried_dishes/layer_3.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[6vw] mb-[40px]"
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
