import { type Products as Product } from "@/types/types";
import { Card } from "../Card/Card";
import { NoResultFilters } from "../Filters/NoResultFilters";
type Props = {
  products: Product[];
};
export const Products = ({ products }: Props) => {
  return (
    <div className="w-full h-full ">
      <div className="flex w-full  flex-wrap gap-8 min-h-[110vh] items-start  py-2 px-4 ">
        {products.length > 0  ? products?.map((item) => (
          <Card
            id={item.id}
            img={item.images[0].url}
            price={item.price}
            title={item.title}
            key={item.id}
          />
        )) : <NoResultFilters/>}
      </div>
    </div>
  );
};
