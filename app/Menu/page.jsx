"use client";
// import React Tools
import { useState } from "react";
import Image from "next/image";
// import shandcn
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import JSON Data
import MenuData from "@/data/menu_data.json";
// import Components
import Card from "../components/Card";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("Fuji Rolls");

  return (
    <div className="bg-black w-[100vw] min-h-[100vh] pt-[100px]">
      {/* Scroll Bar */}
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4 text-white">
          {MenuData.map((item, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-center text-lg w-[120px] gap-1"
              onClick={() => setCurrentPage(item.type)}
            >
              <Image
                src={item.icon}
                alt={item.type}
                width={100}
                height={100}
                className="w-[50px] h-[50px]"
              />
              <h2 className="font-medium text-sm">{item.type}</h2>
            </div>
          ))}
        </div>
        {/* <ScrollBar orientation="horizontal" /> */}
      </ScrollArea>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {MenuData.filter((item) => item.type === currentPage)
          .flatMap((item) => item.products)
          .map((product, i) => (
            <Card
              key={i}
              image={product.image}
              name={product.name}
              price={product.price}
              {...(product.des && { des: product.des })}
              {...(product.quantity && { quantity: product.quantity })}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
