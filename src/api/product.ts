import { TProductsResponse } from "@/lib/types/product";

export async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=4&skip=10`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const formatted: TProductsResponse = await res.json();

  return formatted.products;
}

export async function getProduct(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
