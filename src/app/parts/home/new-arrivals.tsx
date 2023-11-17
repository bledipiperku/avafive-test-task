import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { TProduct, TProductsResponse } from "@/lib/types/product";
import { getProducts } from "@/api/product";

const NewArrivals: FC = async () => {
  const products: TProduct[] = await getProducts();

  return (
    <div className="px-[20px] pt-[50px] pb-[20px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[34px] text-cinder font-semibold">New Arrivals</h2>

        <button className="flex items-center space-x-2 text-primary text-[14px] font-semibold">
          View All
          <Image
            alt="chevron-right icon"
            src="/icons/chevron-right.svg"
            height={24}
            width={24}
          />
        </button>
      </div>

      <div className="grid grid-cols-12 gap-[40px] mb-[40px] mt-[20px]">
        {products?.map((prod: TProduct, i: number) => (
          <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3">
            <Link href={`/product/${prod.id}`}>
              <div className="w-full aspect-square relative border border-gallery rounded shadow mb-4">
                <Image
                  alt="product img"
                  src={prod.thumbnail}
                  fill
                  className="object-center object-contain hover:scale-95 duration-200 z-[-1]"
                />
              </div>
            </Link>

            <div className="flex justify-between ">
              <Link href={`/product/${prod.id}`}>
                <p className="text-[16px] text-transform: capitalize font-medium">
                  {prod.title}
                </p>
              </Link>
              <button>
                <Image
                  alt="fav icon"
                  src="/icons/wishlist-black.svg"
                  height={24}
                  width={24}
                />
              </button>
            </div>

            <p className="text-[14px] text-doveGray mb-1">
              {prod.brand.replace(/_/g, " ")}
            </p>

            <p className="text-[16px] font-medium">${prod.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
