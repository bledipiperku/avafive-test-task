import React, { FC } from "react";

import Breadcrumb from "@/components/Breadcrumb";

import CartProducts from "@/app/parts/cart/cart-products";
import Coupon from "@/app/parts/cart/coupon";

const CartPage: FC = () => {
  return (
    <div className="p-[20px]">
      <Breadcrumb crumbs={["My Cart"]} />
      <div className="container">
        <h1 className="text-[34px] text-primary font-semibold my-4">My Cart</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <div className="my-4 lg:max-w-[700px]">
              <CartProducts />
              <Coupon />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <h3 className="text-cinder text-[20px] pb-2 border-b border-alto font-semibold">
              Order Summary
            </h3>

            <div className="mt-[32px] flex flex-col space-y-[12px]">
              <div className="flex justify-between">
                <span className="text-doveGray text-[16px] font-medium">
                  Sub Total
                </span>
                <span className="text-cinder text-[16px] font-medium">
                  $119.69
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-doveGray text-[16px] font-medium">
                  Discount
                </span>
                <span className="text-cinder text-[16px] font-medium">
                  -$13.40
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-doveGray text-[16px] font-medium">
                  Delivery Fee
                </span>
                <span className="text-cinder text-[16px] font-medium">
                  $0.00
                </span>
              </div>
              <div className="flex justify-between ">
                <span className="text-cinder text-[16px] font-bold">
                  Grand Total
                </span>
                <span className="text-cinder text-[16px] font-bold">
                  $106.29
                </span>
              </div>
            </div>

            <div className="mt-[40px] md:mt-10 flex items-center space-x-4">
              <button className="px-4 md:w-6/12 p-2 flex items-center justify-center space-x-4 rounded-lg border-[2px] border-primary bg-primary text-white text-[16px] font-medium">
                Place Order
              </button>
              <button className="px-4 md:w-6/12 p-2 flex items-center justify-center space-x-4 rounded-lg border-[2px] border-primary text-primary text-[16px] font-medium">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
