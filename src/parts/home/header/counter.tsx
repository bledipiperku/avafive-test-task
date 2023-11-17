"use client";

import { useCart } from "@/store/cart";
import React, { FC, useEffect, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  const { products } = useCart();

  useEffect(() => {
    setCount(products.length);
  }, [products]);

  return (
    <div className="flex items-center justify-center absolute top-[3px] p-[2px] right-0 bg-white rounded-full">
      {count > 0 ? (
        <div className="flex items-center justify-center text-white bg-coral w-[14px] h-[14px] text-[9px]  rounded-full">
          {count}
        </div>
      ) : (
        <div className="bg-coral h-[8px] w-[8px] rounded-full" />
      )}
    </div>
  );
};

export default Counter;
