"use client"
import React, { FormEvent } from "react";

export const FromFooter = () => {
  const handelFrom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget
    const email = elements.namedItem("email") as HTMLInputElement;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email.value);
    if (isValidEmail) {
      console.log("La dirección de correo electrónico es válida");
    } else {
      console.log("La dirección de correo electrónico no es válida");
    }
  };
  return (
    <div className="w-full h-full bg-[#000] text-white py-9">
      <div className="flex justify-between items-center w-[80%] m-auto">
        <div>
          <h4 className="text-3xl font-semibold">Sign Up To Our Newsletter.</h4>
          <p className="py-2 text-xl">
            Be the first to hear about the latest offers.
          </p>
        </div>
        <form onSubmit={handelFrom}>
          <div className="flex gap-x-2">
            <input
              type="email"
              name="email"
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
