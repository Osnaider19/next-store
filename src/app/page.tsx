import { Card } from "@/components/Card/Card";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="pt-5 pb-14 w-full px-7">
        <h2 className="font-bold text-2xl py-2">New products</h2>
        <div className="flex w-full items-center flex-wrap gap-3  justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
    </div>
  );
}
