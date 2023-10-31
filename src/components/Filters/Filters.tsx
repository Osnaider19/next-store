import { category } from "@/data/category";
import "./radio.css";
import Link from "next/link";
export const Filters = () => {
  

  return (
    <div className="w-[220px] h-screen relative top-0 left-0 bg-[#F5F7FF] rounded-md overflow-hidden py-5 px-5">
      <div className="relative w-full h-full px-4">
        <div className="w-full">
          <h3 className=" tracking-wide py-1 text-xl">Categories</h3>
          <div className="flex flex-col items-center justify-start">
            {category.map((item, index) => (
              <Link
                href={`/catalog/${item.category}`}
                key={index}
                className="w-full py-2 capitalize hover:text-[#0156FF]"
              >
                {item.category}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-3">
          <h4 className="font-semibold">Price</h4>
        </div>
      </div>
    </div>
  );
};
