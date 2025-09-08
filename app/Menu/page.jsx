"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import Sashimi from "./pages/Sashimi";
import Nigiri from "./pages/Nigiri";
import Combo from "./pages/Combo";
import FujiRolls from "./pages/FujiRolls";
import Appetiser from "./pages/Appetiser";
import FriedDishes from "./pages/FriedDishes";
import Salad from "./pages/Salad";
import MainDishes from "./pages/MainDishes";
import Noodle from "./pages/Noodle";
import DrinkMenu from "./pages/DrinkMenu";
import SakeMenu from "./pages/SakeMenu";
import MenuIcons from "@/data/menu_data.json";
import Special from "./pages/Special";
import Beer from "./pages/Beer";
import Image from "next/image";

const Menu = () => {
  const pages = [
    <Special key="special" />,
    <Sashimi key="sashimi" />,
    <Nigiri key="nigiri" />,
    <Combo key="combo" />,
    <FujiRolls key="fujiRolls" />,
    <Appetiser key="appetiser" />,
    <FriedDishes key="friedDishes" />,
    <Salad key="salad" />,
    <MainDishes key="mainDishes" />,
    <Noodle key="noodle" />,
    <DrinkMenu key="drinkMenu" />,
    <SakeMenu key="sakeMenu" />,
    <Beer key="beerMenu" />,
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % pages.length);
    },
    onSwipedRight: () => {
      setDirection(-1);
      setCurrent((prev) => (prev - 1 + pages.length) % pages.length);
    },
    delta: 50,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const container = containerRef.current;
    const activeItem = container.querySelector(".active-item");
    if (activeItem) {
      const containerWidth = container.offsetWidth;
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      container.scrollTo({
        left: itemLeft - containerWidth / 2 + itemWidth / 2,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <>
      <div
        ref={containerRef}
        className="max-h-[400px] fixed z-40 w-full overflow-x-auto overflow-y-hidden pt-[90px] md:pt-[120px] bg-black hide-scrollbar"
      >
        <div className="flex items-center text-white py-2 px-2">
          {MenuIcons.map((icons, index) => (
            <div
              key={icons.icon}
              className={`w-[100px] gap-1 flex flex-col flex-shrink-0 justify-center items-center px-4 cursor-pointer ${
                current === index
                  ? "border-2 border-white py-2 px-4 rounded-xl active-item"
                  : ""
              }`}
              onClick={() => setCurrent(index)}
            >
              <Image
                width={100}
                height={100}
                src={icons.icon}
                alt={icons.icon}
                className="w-[30px] h-[30px]"
              />
              <p className="uppercase whitespace-nowrap text-xs">
                {icons.type}
              </p>
            </div>
          ))}
        </div>
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      <div
        {...handlers}
        className="bg-menu-bg object-cover pt-[150px] md:pt-[170px] w-[100vw] min-h-[100vh]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.3 }}
            className="w-full mt-[30px]"
          >
            {pages[current]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Menu;
