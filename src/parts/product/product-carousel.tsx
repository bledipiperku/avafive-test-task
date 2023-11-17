"use client";

import Image from "next/image";
import React, { FC, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(images.length - 1);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevImage = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div className="w-full">
      <div className="relative w-full aspect-square ">
        <Image
          src={images[activeIndex]}
          alt="Image"
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          fill
        />
      </div>

      <div className="flex items-center justify-center mt-[20px]">
        <Image
          alt="chevron-left icon"
          src="/icons/chevron-left.svg"
          height={24}
          width={24}
          onClick={() => prevImage()}
          className="cursor-pointer"
        />

        <div className="flex items-center justify-center space-x-[31px] mx-[16px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[40px] lg:w-[75px] aspect-square"
            >
              <Image
                src={image}
                alt="Image"
                className={`cursor-pointer transition-opacity rounded-lg border duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleImageClick(index)}
                fill
              />
            </div>
          ))}
        </div>

        <Image
          alt="chevron-right icon"
          src="/icons/chevron-right.svg"
          height={24}
          width={24}
          onClick={() => nextImage()}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Carousel;
