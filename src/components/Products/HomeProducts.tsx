"use client"
import React from "react";
import { Products } from "./Products";
import { useProductsStore } from "@/store/productsStore";

export const HomeProducts = () => {
  const products = useProductsStore((state) => state.products);
  return <Products products={products}/>;
};
