import React, { FC } from "react";
import Image from "next/image";

import SocialIcon from "@/app/parts/home/footer/socials-icons";
import FooterSection from "@/app/parts/home/footer/footer-section";

const Footer: FC = () => (
  <footer className="px-[60px] pb-[70px] pt-[32px] bg-primary  w-full">
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-6 grid grid-cols-3 gap-y-8 gap-x-4 pb-6 lg:pb-0 border-b border-alto/25 lg:border-0">
        {sections.map((section, index) => (
          <FooterSection key={index} {...section} />
        ))}
      </div>

      <div className="col-span-12 lg:col-span-6 flex-col lg:ml-auto">
        {/* Social Icons */}
        <div className="socials flex items-center lg:justify-end space-x-4 mb-4 md:mb-8">
          {socialIcons.map((social, index) => (
            <SocialIcon key={index} {...social} />
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center text-white heading-m-14 lg:justify-end mb-2">
          <Image
            alt="location icon"
            src="/icons/location.svg"
            height={24}
            width={24}
          />
          <p className="text-sm ml-2">United States</p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-nobel lg:text-right">
          © 2021 | Cora Leviene All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

const sections = [
  {
    title: "Shop by Category",
    items: [
      "Skincare",
      "Personal Care",
      "Handbags",
      "Apparels",
      "Watches",
      "Eye Wear",
      "Jewellery",
    ],
  },
  {
    title: "About",
    items: ["Contact Us", "About Us", "Careers", "Press"],
  },
  {
    title: "Policy",
    items: [
      "Return",
      "Terms of use",
      "Sitemap",
      "Security",
      "Privacy",
      "ERP Compliance",
    ],
  },
];

const socialIcons = [
  { icon: "/icons/socials/fb.svg", link: "https://www.facebook.com/" },
  { icon: "/icons/socials/insta.svg", link: "https://www.instagram.com/" },
  { icon: "/icons/socials/twitter.svg", link: "https://twitter.com/" },
  { icon: "/icons/socials/youtube.svg", link: "https://www.youtube.com/" },
];
