import React from "react";
import Image from "next/image";

const Noodle = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_title/noodle.webp"
        width={1000}
        height={1000}
        className="w-[70vw] mb-[40px] ml-[10px]"
      />
      {/* layer 1 */}
      <Image
        src="/menu_images/noodle/layer_1.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[10vw] mb-[30px]"
      />
      {/* layer 2 */}
      <Image
        src="/menu_images/noodle/layer_2.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[10vw] mb-[30px]"
      />
      {/* layer 3 */}
      <Image
        src="/menu_images/noodle/layer_3.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[10vw] mb-[30px]"
      />
      {/* layer 4 */}
      <Image
        src="/menu_images/noodle/layer_4.webp"
        width={1000}
        height={1000}
        className="w-[100vw] px-[10vw] mb-[30px]"
      />
    </div>
  );
};

export default Noodle;
