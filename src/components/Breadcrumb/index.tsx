import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface BreadcrumbProps {
  crumbs: string[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <div className="my-[25px]">
      <div className="flex items-center space-x-3 caption-m-12px md:text-[16px]">
        <Link href="/" className="text-primary font-semibold hover:text-black ">
          Home
        </Link>

        {crumbs.map((item: string, i: number) => (
          <div key={i} className="flex space-x-2">
            <Image
              alt="chevron-right icon"
              src="/icons/chevron-right.svg"
              height={16}
              width={16}
            />
            <Link
              href="#"
              className={`capitalize font-semibold ${
                i === crumbs.length - 1
                  ? "text-doveGray"
                  : "text-primary hover:text-black"
              }`}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
