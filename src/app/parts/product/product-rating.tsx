import Image from "next/image";
import React, { FC } from "react";

interface RatingProps {
  rate: number;
  ratings: number;
}

const Rating: FC<RatingProps> = ({ rate, ratings }) => {
  return (
    <div className="flex items-center gap-x-[14px]">
      <div className="flex gap-x-[1px] text-sm mb-1">
        {[...Array(5)].map((star, it) =>
          it < rate ? (
            <Image
              key={it}
              alt="filled star icon"
              src="/icons/star-filled.svg"
              height={24}
              width={24}
            />
          ) : (
            <Image
              key={it}
              alt="star icon"
              src="/icons/star.svg"
              height={24}
              width={24}
            />
          )
        )}
      </div>
      <p className="text-[16px] text-nobel">({ratings}) Ratings</p>
    </div>
  );
};

export default Rating;
