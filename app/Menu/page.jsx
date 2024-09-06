"use client";
// import React Tools
import { useState } from "react";
import Image from "next/image";
// import shandcn
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
// import JSON Data
import MenuData from "@/data/menu_data.json";
// import Components
import Card from "../components/Card";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("Fuji Rolls");

  return (
    <div className="bg-black w-full min-h-[100vh] pt-[90px] md:pt-[120px] overflow-x-hidden">
      {/* Scroll Bar */}
      <ScrollArea className="w-full overflow-x-auto rounded-md">
        <div className="flex w-max space-x-4 p-4 text-white text-center">
          {MenuData.map((item, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col items-center justify-center text-lg w-[120px] gap-1 ${
                currentPage === item.type && "bg-white"
              } bg-opacity-20 rounded-2xl overflow-hidden p-2 md:hover:bg-white md:hover:bg-opacity-15`}
              onClick={() => setCurrentPage(item.type)}
            >
              <Image
                src={item.icon}
                alt={item.type}
                width={100}
                height={100}
                className="w-[50px] h-[50px] max-w-full"
              />
              <h2 className="font-medium text-sm">{item.type}</h2>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden md:flex" />
      </ScrollArea>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-full box-border">
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
              className="w-full max-w-full box-border"
              isLoading={true} // 当加载数据时，将此属性设置为true
              dataUrl={product.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
