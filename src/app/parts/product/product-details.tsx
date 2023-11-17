"use client";

import { TAB_STATE } from "@/lib/constants";
import { FC, useState } from "react";

interface ProductDetailsProps {
  description: string;
}

type TTabState = "des" | "related" | "reviews";

const ProductDetails: FC<ProductDetailsProps> = ({ description }) => {
  const [tab, setTab] = useState<TTabState>(TAB_STATE.DESCRIPTION);

  return (
    <div className="mt-6 md:mt-12">
      <div className="bg-seaShell rounded-lg py-2 px-4 flex space-x-4 md:space-x-12">
        <button
          onClick={() => setTab(TAB_STATE.DESCRIPTION)}
          className={`py-1 px-3 rounded text-[16px] font-medium duration-300 ease-in ${
            tab === TAB_STATE.DESCRIPTION
              ? "bg-primary text-white"
              : "text-doveGray"
          }`}
        >
          Product Description
        </button>
        <button
          onClick={() => setTab("related")}
          className={`py-1 px-3 rounded text-[16px] font-medium duration-300 ease-in ${
            tab === "related" ? "bg-primary text-white" : "text-doveGray"
          }`}
        >
          Related Products
        </button>
        <button
          onClick={() => setTab("reviews")}
          className={`py-1 px-3 rounded text-[16px] font-medium duration-300 ease-in ${
            tab === "reviews" ? "bg-primary text-white" : "text-doveGray"
          }`}
        >
          Ratings and Reviews
        </button>
      </div>

      <>
        {tab === TAB_STATE.DESCRIPTION && (
          <div className="mt-[24px]">
            <p className="text-[16px] text-doveGray font-medium">
              {description}
            </p>
          </div>
        )}
        {tab === TAB_STATE.RELATED && (
          <div className="mt-[24px]">
            <p className="text-[16px] text-doveGray font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              scelerisque laoreet tortor cras molestie tincidunt malesuada
              malesuada. Neque, mauris duis dui id morbi magna. Cras lacus,
              viverra auctor in turpis est quisque eget tristique.
              <br />
              <br />
              Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et
              pharetra platea pretium nec feugiat tincidunt quam leo tristique.
              Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus
              ut non eu mus volutpat.
              <br />
              <br />
              Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo
              mauris, faucibus vulputate adipiscing elementum tristique dictumst
              augue pellentesque. Justo, sed nunc, pretium turpis scelerisque.
              Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum
              molestie sit felis imperdiet.
            </p>
          </div>
        )}
        {tab === TAB_STATE.REVIEWS && (
          <div className="mt-[24px]">
            <p className="text-[16px] text-doveGray font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              scelerisque laoreet tortor cras molestie tincidunt malesuada
              malesuada. Neque, mauris duis dui id morbi magna. Cras lacus,
              viverra auctor in turpis est quisque eget tristique.
              <br />
              <br />
              Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et
              pharetra platea pretium nec feugiat tincidunt quam leo tristique.
              Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus
              ut non eu mus volutpat.
              <br />
              <br />
              Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo
              mauris, faucibus vulputate adipiscing elementum tristique dictumst
              augue pellentesque. Justo, sed nunc, pretium turpis scelerisque.
              Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum
              molestie sit felis imperdiet.
            </p>
          </div>
        )}
      </>
    </div>
  );
};

export default ProductDetails;
