"use client";
import { IconClose, IconSearch } from "@/Icons/Icons";
import React from "react";

type Props = {
 setSearch : Function,
 search : boolean,
}
export const ButtonSearch = ({setSearch , search } : Props) => {
    const handelClick = () => {
    setSearch(!search)
    }
  return (
    <button onClick={handelClick} className=" w-[24px] h-[24px] flex justify-center items-center">
      {search ? <IconClose/>  : <IconSearch /> }
    </button>
  );
};
