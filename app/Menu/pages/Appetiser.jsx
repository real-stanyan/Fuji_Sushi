import React from "react";
import Image from "next/image";

const Appetiser = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_title/appetiser.webp"
        width={1000}
        height={1000}
        className="w-[70vw] mb-[50px]"
      />
      {/* layer 1 */}
      <Image
        src="/menu_images/appetiser/layer_1.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[5vw] mb-[20px]"
      />
      <Image
        src="/menu_images/hr.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[6vw] mb-[20px]"
      />
      {/* layer 2 */}
      <Image
        src="/menu_images/appetiser/layer_2.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[5vw] mb-[20px]"
      />
      <Image
        src="/menu_images/hr.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[6vw] mb-[20px]"
      />
      {/* layer 3 */}
      <Image
        src="/menu_images/appetiser/layer_3.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[5vw] mb-[20px]"
      />
      <Image
        src="/menu_images/hr.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[6vw] mb-[20px]"
      />
      {/* layer 4 */}
      <Image
        src="/menu_images/appetiser/layer_4.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[5vw] mb-[20px]"
      />
    </div>
  );
};

export default Appetiser;
