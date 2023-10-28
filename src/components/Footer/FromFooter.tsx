import React from "react";

export const FromFooter = () => {
  return (
    <div className="w-full h-full bg-[#000] text-white py-9">
      <div className="flex justify-between items-center w-[80%] m-auto">
        <div>
          <h4 className="text-3xl font-semibold">Sign Up To Our Newsletter.</h4>
          <p className="py-2 text-xl">
            Be the first to hear about the latest offers.
          </p>
        </div>
        <form>
          <div className="flex gap-x-2">
            <input
              type="email"
              className="border border-white outline-none rounded-sm bg-[#000] px-4"
              placeholder="Your Email"
            />

            <button className="py-2 px-4 bg-[#0156FF] rounded-3xl">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
