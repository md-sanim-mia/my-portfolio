"use client";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsProjectorFill } from "react-icons/bs";
import { FaCog, FaHome, FaMicroblog } from "react-icons/fa";
import { FcAddDatabase } from "react-icons/fc";

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
            ? "bg-slate-100 inset-y-0 left-0  lg:grid min-h-screen p-4 fixed  w-64 z-20 transition-transform duration-500 ease-in-out"
            : isOpen === "isHiden"
            ? "bg-slate-100 lg:grid inset-y-0 left-0  hidden min-h-screen p-4 fixed w-64 z-20 transition-transform duration-500 ease-in-out"
            : "bg-slate-100 hidden inset-y-0 left-0 fixed  lg:grid min-h-screen p-4 w-64 z-20 transition-transform duration-500 ease-in-out"
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
              href="/dashboard/addblog"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FcAddDatabase className="h-5 w-5" />
              <span>Add Blog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/addproject"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FcAddDatabase className="h-5 w-5" />
              <span>Add Project</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/allblogs"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FaMicroblog className="h-5 w-5" />
              <span>All Blogs</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/allproject"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <BsProjectorFill className="h-5 w-5" />
              <span>All Projects</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/message"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <MessageCircle className="h-5 w-5" />
              <span>All Message</span>
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
