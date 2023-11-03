import { Filters } from "@/components/Filters/Filters";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { HomeProducts } from "@/components/Products/HomeProducts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="w-full">
        <div className="flex justify-center items-center relative">
          <Filters />
          <div className="pl-[250px] w-full">
            <HomeProducts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
