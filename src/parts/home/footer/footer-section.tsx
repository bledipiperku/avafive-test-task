import React, { FC } from "react";

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: FC<FooterSectionProps> = ({ title, items }) => (
  <div className="col-span-3 lg:col-span-1">
    <h3 className="text-white  mb-3">{title}</h3>
    <ul className="text-nobel flex flex-wrap space-x-1 lg:flex-col lg:space-y-1 lg:space-x-0">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <li className="hover:underline cursor-pointer">{item}</li>
          {i < items.length - 1 && <span className="lg:hidden"> | </span>}
        </React.Fragment>
      ))}
    </ul>
  </div>
);

export default FooterSection;
