import React from "react";
import Image from "next/image";

const FujiRolls = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/menu_title/fuji_rolls.webp"
        width={1000}
        height={1000}
        className="w-[70vw] mb-[50px]"
      />
      <div className="grid grid-cols-2 gap-2 px-[4vw]">
        {/* Salmon Avocada Roll */}
        <Image
          src="/menu_images/fuji_rolls/salmon_avocada_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Cooked Tuna Avcado Roll */}
        <Image
          src="/menu_images/fuji_rolls/cooked_tuna_avcado_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Teriyaki Chicken Avocado Roll */}
        <Image
          src="/menu_images/fuji_rolls/teriyaki_chicken_avocado_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Chicken Katsu Avocado Roll */}
        <Image
          src="/menu_images/fuji_rolls/chicken_katsu_avocado_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* California Roll */}
        <Image
          src="/menu_images/fuji_rolls/california_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Pawn Katsu Avocado Roll */}
        <Image
          src="/menu_images/fuji_rolls/pawn_katsu_avocado_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Veggies Tempura Avcado Roll */}
        <Image
          src="/menu_images/fuji_rolls/veggies_tempura_avcado_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Fuji Baked Roll */}
        <Image
          src="/menu_images/fuji_rolls/fuji_baked_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Sliced Teriyaki Chicken Roll */}
        <Image
          src="/menu_images/fuji_rolls/sliced_teriyaki_chicken_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
        {/* Teriyaki Chicken Avocado Roll */}
        <Image
          src="/menu_images/fuji_rolls/teriyaki_chicken_avocado_roll.webp"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default FujiRolls;
