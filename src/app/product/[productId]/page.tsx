import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getProduct } from "@/api/product";

import { TProduct } from "@/lib/types/product";

import Breadcrumb from "@/components/Breadcrumb";
import CouponCode from "@/components/CouponCode";

import Carousel from "@/parts/product/product-carousel";
import ProductDetails from "@/parts/product/product-details";
import ProductActions from "@/parts/product/product-actions";
import Rating from "@/parts/product/product-rating";

interface ProductPageProps {
  params: {
    productId: number;
  };
}

const ProductPage = async ({ params: { productId } }: ProductPageProps) => {
  const product: TProduct = await getProduct(productId);

  const {
    title,
    category,
    images,
    brand,
    price,
    rating,
    description,
    discountPercentage,
  } = product;

  const prevPrice = ((price * 100) / (100 - discountPercentage)).toFixed(2);

  return (
    <div className="px-[20px]">
      <Breadcrumb crumbs={[category, title]} />
      <div className="mb-[100px]">
        <div className="mt-4 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <Carousel images={images} />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-dark text-[34px] font-semibold text-transform: capitalize">
                  {title}
                </h1>
                <h4 className="text-doveGray text-[20px] font-semibold">
                  {brand.replace(/_/g, " ")}
                </h4>
              </div>

              <Rating
                rate={rating}
                ratings={Math.floor(Math.random() * (500 - 10 + 1)) + 10} // random
              />

              <div className="flex flex-col md:flex-row md:items-center space-x-2 lg:space-x-[16px]">
                <p className="text-cinder text-[40px] font-bold">
                  ${price.toFixed(2)}
                </p>
                <div className="flex items-center  lg:space-x-8 sm:space-x-4">
                  <p className="text-[30px] text-nobel font-semibold line-through">
                    ${prevPrice}
                  </p>
                  <p className="text-coralRed text-[20px] font-semibold">
                    {discountPercentage}%OFF
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-black/10" />

              <div className="flex md:space-y-0 md:flex-row md:justify-between md:items-start md:space-x-4 lg:space-x-[16px]">
                <div>
                  <h6 className="text-cinder text-[20px] font-semibold">
                    Delivery Details
                  </h6>
                  <p className="text-doveGray text-[16px] max-w-[200px]">
                    Check estimated delivery date/pickup option.
                  </p>
                </div>

                <CouponCode />
              </div>

              <div className="flex items-center space-x-2">
                <h6 className="text-dark text-[20px] font-semibold">
                  Quantity:
                </h6>
                <div className="border border-primary rounded w-[73px] h-[30px] flex items-center justify-between">
                  <Image
                    alt="minus icon"
                    src="/icons/minus.svg"
                    height={24}
                    width={24}
                  />
                  <span>1</span>
                  <Image
                    alt="plus icon"
                    src="/icons/plus.svg"
                    height={24}
                    width={24}
                  />
                </div>
              </div>

              <div className="p-[16px] rounded-lg flex space-x-[20px] border border-primary max-w-[391px]">
                <div>
                  <p className="text-[16px] text-cinder font-medium">
                    Get upto 30% Off on order value above $100
                  </p>
                  <Link
                    className="text-primary text-[14px] font-medium"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <div className="flex flex-col items-center p-3 bg-seaShell rounded">
                  <span className="text-doveGray text-[14px] font-normal">
                    Use Code
                  </span>
                  <span className="text-cinder text-[16px]">ORDER100</span>
                </div>
              </div>

              <ProductActions product={product} />
            </div>
          </div>
        </div>

        <ProductDetails description={description} />
      </div>
    </div>
  );
};

export default ProductPage;
