"use client";

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
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

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % pages.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + pages.length) % pages.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="bg-menu-bg object-cover pt-[120px] md:pt-[150px] w-[100vw] min-h-[100vh]"
    >
      {pages[current]}
    </div>
  );
};

export default Menu;
