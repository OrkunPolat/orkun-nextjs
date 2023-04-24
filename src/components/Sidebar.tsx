import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TbCircleLetterB } from "react-icons/tb";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between ">
        <div className="'flex flex-col items-center">
          <Link href="/">
            <div className="bg-orange-700 hover:bg-black transition duration-200 hover:text-orange-700  text-black p-3 rounded-lg inline-block">
              <TbCircleLetterB size={20} />
            </div>
          </Link>
          <div className="border-b-[1px] border-gray-200 w-full p-4"></div>
          <Link href="/">
            <div className="bg-gray-300 cursor-pointer hover:bg-gray-200 text-black p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <div className="border-b-[1px] border-gray-200 w-full p-2"></div>
          <Link href="/customers">
            <div className="bg-gray-300 cursor-pointer hover:bg-gray-200 text-black p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <div className="border-b-[1px] border-gray-200 w-full p-2"></div>
          <Link href="/orders">
            <div className="bg-gray-300 cursor-pointer hover:bg-gray-200 text-black p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <div className="border-b-[1px] border-gray-200 w-full p-2"></div>
          <Link href="/">
            <div className="bg-gray-300 cursor-pointer hover:bg-gray-200 text-black p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>

      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
