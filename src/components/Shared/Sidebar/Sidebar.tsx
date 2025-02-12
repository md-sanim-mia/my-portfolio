"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaCog, FaHome } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState("");

  const handileClickHiden = () => {
    setIsOpen("isHiden");
  };
  const handileClickIsShow = () => {
    setIsOpen("isShow");
  };
  return (
    <>
      <div className="grid lg:hidden ml-3 h-6 items-center fixed">
        <Menu
          className="cursor-pointer  hover:text-green-500"
          onClick={handileClickIsShow}
        />
      </div>
      <div
        className={
          isOpen === "isShow"
            ? "bg-slate-100 inset-y-0 left-0  lg:grid min-h-screen p-4 w-64 z-20 transition-transform duration-500 ease-in-out"
            : isOpen === "isHiden"
            ? "bg-slate-100 lg:grid inset-y-0 left-0  hidden min-h-screen p-4 w-64 z-20 transition-transform duration-500 ease-in-out"
            : "bg-slate-100 hidden inset-y-0 left-0  lg:grid min-h-screen p-4 w-64 z-20 transition-transform duration-500 ease-in-out"
        }
      >
        <ul className="space-y-4">
          <div className="flex text-[#0A192F] justify-between items-center">
            <Link href={"/"}>
              <h2 className="text-xl font-bold uppercase">Sanim Mia</h2>
            </Link>
            <X
              onClick={handileClickHiden}
              className="cursor-pointer lg:hidden hover:text-green-500"
            />
          </div>
          <li>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FaHome className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-info"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FaUser className="h-5 w-5" />
              <span>User Info</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FaCog className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
