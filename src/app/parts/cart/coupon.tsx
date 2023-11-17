"use client";

import React, { FC, useState } from "react";
import Image from "next/image";

import CouponCode from "@/components/CouponCode";

const CouponDrop: FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center pb-2 border-b border-alto justify-between">
        <h5 className="text-[16px] text-dark">Apply Coupon Code</h5>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`transition-transform duration-400 transform ${
            expanded ? "rotate-180" : ""
          }`}
        >
          <Image
            alt="chevron icon"
            src="/icons/chevron-bottom.svg"
            height={24}
            width={24}
          />
        </button>
      </div>

      <div className="mt-5 md:mt-8 max-w-[328px]">
        {expanded && <CouponCode />}
      </div>
    </>
  );
};

export default CouponDrop;
