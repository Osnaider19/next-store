import { type Products as Product } from "@/types/types";
import { Card } from "../Card/Card";
type Props = {
  products: Product[];
};
export const Products = ({ products }: Props) => {
  return (
    <div className="w-full h-full ">
      <div className="flex w-full  flex-wrap gap-8 min-h-screen items-start justify-between py-2 px-4">
        {products?.map((item) => (
          <Card
            id={item.id}
            img={item.images[0].url}
            price={item.price}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};
