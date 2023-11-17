import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-gallery p-4">
      <p className="text-sm text-center">
        {`We are currently experiencing local customs clearance delays. For the latest updates, please check your order status `}
        <Link href="#" className="underline text-primary">
          here
        </Link>
      </p>
    </div>
  );
};

export default Banner;
