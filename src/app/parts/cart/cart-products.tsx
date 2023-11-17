"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/store/cart";

const CartProducts: FC = () => {
  const { products, removeFromCart } = useCart();

  return (
    <div className="my-4 md:mt-4 md:mb-16">
      <div className="border-b border-alto pb-2 md:grid grid-cols-12 gap-2">
        <div className="col-span-6 text-[16px] text-doveGray font-medium">
          Product Name
        </div>
        <div className="col-span-2 text-[16px] text-doveGray font-medium">
          Price
        </div>
        <div className="col-span-2 text-[16px] text-doveGray font-medium">
          Qty
        </div>
        <div className="col-span-2 text-[16px] text-doveGray font-medium">
          Subtotal
        </div>
      </div>

      <>
        {products.length > 0 ? (
          <>
            {products.map((prod, i) => {
              const { title, brand, price, thumbnail } = prod;
              return (
                <div
                  key={i}
                  className="my-[20px] pb-10 md:pb-2 grid grid-cols-12 gap-2 relative"
                >
                  <div className="flex items-center col-span-12 md:col-span-6 space-x-2">
                    <Image
                      alt="pImage"
                      src={thumbnail}
                      width={75}
                      height={75}
                      className="border rounded-lg"
                    />
                    <div className="flex flex-col space-y-2">
                      <h5 className="text-[16px] text-cinder capitalize font-medium">
                        {title}
                      </h5>
                      <p className="text-[16px] text-doveGray font-medium">
                        {brand.replace(/_/g, " ")}
                      </p>
                      <p className="text-[16px] text-doveGray font-medium">
                        Qty - 1
                      </p>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-[14px] text-cinder">
                    <span className="md:hidden text-xs">Price: </span>$
                    {price.toFixed(2)}
                  </div>
                  <div className="col-span-4 md:col-span-2 text-[14px] text-cinder">
                    <span className="md:hidden text-xs">Qty: </span>1
                  </div>
                  <div className="col-span-4 md:col-span-2 text-[14px] text-cinder">
                    <span className="md:hidden text-xs">Subtotal: </span>$
                    {price.toFixed(2)}
                  </div>

                  <div className="absolute bottom-2 right-3 flex space-x-4 items-center">
                    <button className="text-primary underline text-[16px] font-bold">
                      Move to Wishlist
                    </button>
                    <button
                      onClick={() => removeFromCart(prod)}
                      className="text-monza underline text-[16px] font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div>
            <p className="mt-6 text-coralRed">Your cart is empty!</p>
            <p className="text-[14px] mt-1">
              {`Check your whish list or `}
              <Link href="/" className="text-primary font-medium">
                continue shopping.
              </Link>
            </p>
          </div>
        )}
      </>
    </div>
  );
};

export default CartProducts;
