import React from "react";
import Image from "next/image";

const Salad = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_title/salad.webp"
        width={1000}
        height={1000}
        className="w-[60vw] mb-[40px]"
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
      {/* chicken_katsu_and_rice */}
      <div className="flex w-[100vw] px-8 justify-between items-center my-3">
        <Image
          src="/menu_images/salad/chicken_katsu_and_rice.webp"
          width={1000}
          height={1000}
          className="w-[20vw] flex-1 rounded-full"
        />
        <h3
          className={`
        w-[70vw] text-center font-BebasNeue tracking-wider text-2xl lg:text-4xl xl:text-6xl border-b-4 border-[#c42c24]
          `}
        >
          Chicken Katsu and Rice
        </h3>
      </div>
      {/* kaarage_salad */}
      <div className="flex w-[100vw] px-8 justify-between items-center my-3">
        <h3
          className={`
        w-[70vw] text-center font-BebasNeue tracking-wider text-2xl lg:text-4xl xl:text-6xl
         border-b-4 border-[#c42c24]
          `}
        >
          Kaarage Salad
        </h3>
        <Image
          src="/menu_images/salad/kaarage_salad.webp"
          width={1000}
          height={1000}
          className="w-[20vw] flex-1 rounded-full"
        />
      </div>
      {/* katsu_salad */}
      <div className="flex w-[100vw] px-8 justify-between items-center my-3">
        <Image
          src="/menu_images/salad/katsu_salad.webp"
          width={1000}
          height={1000}
          className="w-[20vw] flex-1 rounded-full"
        />
        <h3
          className={`
        w-[70vw] text-center font-BebasNeue tracking-wider text-2xl lg:text-4xl xl:text-6xl 
        border-b-4 border-[#c42c24]
          `}
        >
          Katsu Salad
        </h3>
      </div>
      {/* Salmon Avocado Salad */}
      <div className="flex w-[100vw] px-8 justify-between items-center my-3">
        <h3
          className={`
        w-[70vw] text-center font-BebasNeue tracking-wider text-2xl lg:text-4xl xl:text-6xl 
        border-b-4 border-[#c42c24]
          `}
        >
          Salmon Avocado Salad
        </h3>
        <Image
          src="/menu_images/salad/salmon_avo_salad.webp"
          width={1000}
          height={1000}
          className="h-[20vw] flex-1 rounded-full"
        />
      </div>
    </div>
  );
};

export default Salad;
