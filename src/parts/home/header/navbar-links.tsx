import React, { FC } from "react";
import Link from "next/link";

const NavbarLinks: FC = () => {
  return (
    <nav>
      <ul className="text-cinder font-semibold cursor-auto space-y-2 lg:flex lg:space-x-[20px] lg:space-y-0 lg:text-sm">
        <li>
          <Link href="/shop/handbag" className="hover:underline">
            Hand Bags
          </Link>
        </li>
        <li>
          <Link href="/shop/watches" className="hover:underline">
            Watches
          </Link>
        </li>
        <li>
          <Link href="/shop/skincare" className="hover:underline">
            Skincare
          </Link>
        </li>
        <li>
          <Link href="/shop/jewellery" className="hover:underline">
            Jewellery
          </Link>
        </li>
        <li>
          <Link href="/shop/apparels" className="hover:underline">
            Apparels
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
