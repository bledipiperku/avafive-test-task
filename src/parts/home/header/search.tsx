import React, { FC } from "react";
import Image from "next/image";

const SearchInput: FC = () => {
  return (
    <div>
      <div className="flex w-full md:w-[362px] space-x-[8px] h-[44px] px-[8px] bg-seaShell rounded duration-300 ease-in">
        <Image
          alt="search icon"
          src="/icons/search.svg"
          height={24}
          width={24}
        />

        <input
          className="w-full outline-none bg-seaShell placeholder:text-doveGray"
          placeholder="Search for products or brands....."
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchInput;
