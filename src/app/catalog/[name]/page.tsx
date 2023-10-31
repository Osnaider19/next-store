import { ButtonsBack } from "@/components/Buttons/ButtonsBack";
import { Filters } from "@/components/Filters/Filters";
import { CatalogProducts } from "@/components/Products/CatalogProducts";

type Params = {
  params: {
    name: string;
  };
};
export default function PageCatelog({ params }: Params) {
  return (
    <div className="relative  w-full  py-9">
      <div className="px-6">
        <ButtonsBack />
      </div>
      <div className="flex flex-col px-9">
        <section>
          <h1 className="text-2xl font-semibold capitalize  py-3">
            {params.name}
          </h1>
        </section>
      </div>
      <div className="flex gap-x-3">
        <Filters />
        <CatalogProducts category={params.name} />
      </div>
    </div>
  );
}
