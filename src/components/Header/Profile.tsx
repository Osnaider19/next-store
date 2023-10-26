import { IconCart, IconSearch } from "@/Icons/Icons";

export const Profile = () => {
  return (
    <div className="flex gap-x-4 px-4 justify-center items-center">
      <button>
        <IconSearch />
      </button>
      <button>
        <IconCart />
      </button>
      <div>
        <button className="w-[36px] h-[36px] rounded-full bg-red-400">

        </button>
      </div>
    </div>
  );
};
