import React from "react";
import Image from "next/image";

const Noodle = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_title/noodle.webp"
        width={1000}
        height={1000}
        className="w-[70vw] mb-[40px] ml-[15vw]"
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
      {/* undo */}
      <div className="flex w-[100vw] px-8 justify-between items-center my-3">
        <h3
          className={`
              w-[70vw] text-center font-BebasNeue tracking-wider text-2xl lg:text-4xl xl:text-6xl
               border-b-4 border-[#c42c24]
                `}
        >
          Undo
        </h3>
        <Image
          src="/menu_images/noodle/yakisoba.webp"
          width={1000}
          height={1000}
          className="w-[30vw] flex-1 rounded-full"
        />
      </div>
      {/* yakisoba */}
      <div className="flex w-[100vw] px-8 justify-between items-center my-3">
        <Image
          src="/menu_images/noodle/undo.webp"
          width={1000}
          height={1000}
          className="w-[30vw] flex-1 rounded-full"
        />
        <h3
          className={`
              w-[70vw] text-center font-BebasNeue tracking-wider text-2xl lg:text-4xl xl:text-6xl
               border-b-4 border-[#c42c24]
                `}
        >
          Yakisoba
        </h3>
      </div>
      {/* curry */}
      <div className="flex w-[100vw] px-8 justify-between items-center my-3">
        <h3
          className={`
              w-[70vw] text-center font-BebasNeue tracking-wider text-2xl lg:text-4xl xl:text-6xl
               border-b-4 border-[#c42c24]
                `}
        >
          Curry
        </h3>
        <Image
          src="/menu_images/noodle/curry.webp"
          width={1000}
          height={1000}
          className="w-[30vw] flex-1 rounded-full"
        />
      </div>
    </div>
  );
};

export default Noodle;
