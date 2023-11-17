import React, { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="p-4 ">
      <div className="flex justify-end bg-[url('/images/hero.png')] rounded-2xl py-[40px] h-[400px] bg-no-repeat bg-cover">
        <div className="py-6 px-[45px] text-primary flex flex-col bg-alto/70 rounded-l-3xl w-[600px] lg:w-[720px]">
          <h2 className="text-[42px] lg:text-[60px] font-extrabold">
            Carry your Funk
          </h2>
          <p className="mt-4 text-[22px] lg:text-[28px] font-medium max-w-[430px]">
            Trendy handbags collection for your party animal
          </p>
          <button className="mt-8 bg-primary hover:shadow flex space-x-2 px-6 py-2 w-fit rounded text-bright">
            <Image
              alt="arrow icon"
              src="/icons/white-arrow.svg"
              height={24}
              width={24}
            />
            <span className="text-white">See more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
