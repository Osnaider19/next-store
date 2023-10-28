import { IconAccount, IconSaving, IconSupport } from "@/Icons/Icons";
import { FromFooter } from "./FromFooter";

export const Footer = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FF]">
      <div className="flex justify-evenly items-center py-7">
        <div className="flex justify-center items-center flex-col w-[270px]">
          <IconSupport />
          <h4 className="font-bold text-center py-3">Product Support</h4>
          <p className="text-center">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col w-[270px]">
          <IconAccount />
          <h4 className="font-bold text-center py-3">Personal Account</h4>
          <p className="text-center">
            With big discounts, free delivery and a dedicated support
            specialist.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col w-[270px]">
          <IconSaving />
          <h4 className="font-bold text-center py-3">Amazing Savings</h4>
          <p className="text-center">
            Up to 70% off new Products, you can be sure of the best price.
          </p>
        </div>
      </div>
      <FromFooter/>
    </section>
  );
};
