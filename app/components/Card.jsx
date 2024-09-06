import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const Card = ({ image, name, price, quantity = 0, des = "", dataUrl }) => {
  const [isLoading, setIsLoading] = useState(true); // 初始状态为true，表示正在加载
  const [data, setData] = useState(null); // 用于存储加载的数据

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl); // 替换为实际的数据API URL
        const result = await response.json();
        setData(result); // 将加载的数据存储到state
        setIsLoading(false); // 数据加载完成后将isLoading设置为false
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // 即使发生错误也将加载状态设置为false
      }
    };

    fetchData();
  }, [dataUrl]); // 当dataUrl变化时重新加载数据

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden">
      <Image
        src={data ? data.image : image} // 使用加载的数据或传入的image作为后备
        alt={data ? data.name : name}
        width={1000}
        height={1000}
        priority
        className="w-full h-full"
      />
      <div className="flex justify-between items-center absolute left-0 bottom-0 w-full h-[60px] md:h-[100px] bg-black bg-opacity-50 text-white p-2">
        <div className="font-semibold text-xl">{data ? data.name : name}</div>
        <div className="flex flex-col justify-center items-center">
          <div className="whitespace-nowrap">$ {data ? data.price : price}</div>
          {data && data.quantity > 0 && (
            <div className="whitespace-nowrap">({data.quantity}pcs)</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
