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
    <div className="block lg:flex bg-black w-[100vw] min-h-[100vh] pt-[100px]">
      {/* Scroll Bar --- Mobile */}
      <ScrollArea className="lg:hidden w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4 text-white">
          {MenuData.map((item, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col items-center justify-center text-lg w-[120px] gap-1 ${
                currentPage === item.type && "bg-white"
              } bg-opacity-20 rounded-2xl overflow-hidden p-2`}
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
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
      {/* Scroll Bar --- PC */}
      {/* <ScrollArea className="hidden lg:block fixed left-0 top-0 h-[100vh] w-48 rounded-md border"> */}
      <ScrollArea className="hidden lg:block fixed h-[100vh] w-48 rounded-md border">
        <div className="flex flex-col justify-center items-center text-center w-max space-x-4 p-4 text-white fixed">
          {MenuData.map((item, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col items-center justify-center text-lg w-[120px] gap-1 ${
                currentPage === item.type && "bg-white"
              } bg-opacity-20 rounded-2xl overflow-hidden p-2`}
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
