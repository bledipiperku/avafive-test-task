"use client";

import Image from "next/image";
import React from "react";

import { TProduct } from "@/lib/types/product";
import { useCart } from "@/store/cart";

interface ProductActionsProps {
  product: TProduct;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const { addToCart } = useCart();

  return (
    <div className="flex items-center space-x-2 md:space-x-4 ">
      <button
        onClick={() => addToCart(product)}
        className="px-4 md:w-7/12 p-2 flex items-center justify-center space-x-2 md:space-x-4 rounded-lg border-[2px] border-primary bg-primary text-[16px] text-white"
      >
        <Image
          alt="bag icon"
          src="/icons/white-cart-bag.svg"
          height={24}
          width={24}
        />
        <span>Add to bag</span>
      </button>
      <button className="px-4 md:w-5/12 p-2 flex items-center justify-center space-x-2 md:space-x-4 rounded-lg border-[2px] border-primary text-[16px] text-primary">
        <Image
          alt="wishlist icon"
          src="/icons/wishlist.svg"
          height={24}
          width={24}
        />
        <span>Add To Wishlist</span>
      </button>
    </div>
  );
};

export default ProductActions;
