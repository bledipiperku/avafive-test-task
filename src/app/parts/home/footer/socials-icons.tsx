import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialIconProps {
  icon: string;
  link: string;
}

const SocialIcon: FC<SocialIconProps> = ({ icon, link }) => (
  <Link href={link} passHref target="_blank" rel="noopener noreferrer">
    <Image
      alt="social icon"
      src={icon}
      className="hover:scale-95 duration-300 ease-in"
      height={38}
      width={38}
    />
  </Link>
);

export default SocialIcon;
