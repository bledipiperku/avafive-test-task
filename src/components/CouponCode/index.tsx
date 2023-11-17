import React, { FC } from "react";

const CouponCode: FC = () => {
  return (
    <div className="flex-1 p-3 rounded bg-seaShell flex items-center max-w-[500px]">
      <input
        type="text"
        className="outline-none w-full text-[16px] placeholder:text-doveGray bg-seaShell font-normal"
        placeholder="Apply Valid Pincode"
      />
      <button className="text-primary text-[14px] font-normal">CHECK</button>
    </div>
  );
};

export default CouponCode;
