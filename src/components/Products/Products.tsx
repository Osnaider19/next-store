"use client";

import { useProductsStore } from "@/store/productsStore";
import { Card } from "../Card/Card";

export const Products = () => {
  const products = useProductsStore((state) => state.products);
  return (
    <div className="w-full h-full pl-[230px] py-5">
      <h2 className="font-bold text-2xl py-2 px-4">New products</h2>
      <div className="flex w-full  flex-wrap gap-3 min-h-screen  justify-between ">
        {products?.map((item, index) => (
          <Card
            id={item.id}
            img={item.images[0].url}
            price={item.price}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
