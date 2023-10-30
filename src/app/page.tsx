import { Filters } from "@/components/Filters/Filters";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Products } from "@/components/Products/Products";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="pb-20 w-full  ">
        <div className="flex justify-center items-center relative">
          <Filters />
          <Products />
        </div>
      </div>
      <Footer />
    </div>
  );
}
