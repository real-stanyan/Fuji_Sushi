"use client";

import React, { useState } from "react";
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

const Menu = () => {
  const pages = [
    <Sashimi key="sashimi" />,
    <Nigiri key="nigiri" />,
    <Combo key="combo" />,
    <FujiRolls key="fujiRolls" />,
    <Appetiser key="appetiser" />,
    <FriedDishes key="friedDishes" />,
    <Salad key="salad" />,
    <MainDishes key="mainDishes" />,
    <Noodle key="noodle" />,
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % pages.length);
    },
    onSwipedRight: () => {
      setDirection(-1);
      setCurrent((prev) => (prev - 1 + pages.length) % pages.length);
    },
    delta: 50, // 调整滑动阈值
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="bg-menu-bg object-cover pt-[90px] md:pt-[150px] w-[100vw] min-h-[100vh]"
    >
      <div className="text-center bg-black text-white mb-[30px]">
        Swipe left or right
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 50 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {pages[current]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Menu;
