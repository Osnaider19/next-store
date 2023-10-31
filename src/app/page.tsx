
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { HomeProducts } from "@/components/Products/HomeProducts";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="pb-20 w-full  p-7">
        <div className="flex justify-center items-center relative">
         <HomeProducts/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
