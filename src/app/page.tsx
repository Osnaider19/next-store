import { Card } from "@/components/Card/Card";
import { Hero } from "@/components/Hero/Hero";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="pt-5 pb-20 w-full px-7">
        <h2 className="font-bold text-2xl py-2">New products</h2>
        <div className="flex w-full items-center flex-wrap gap-3  justify-between">
          {products.map((item, index) => (
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
    </div>
  );
}
