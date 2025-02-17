"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Session } from "next-auth";
const Naver = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "All Project" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
    (session && { href: "/dashboard", label: "Dashboard" }) || null,
  ].filter((item) => item !== null);

  return (
    <div className="h-16 mb-4">
      <nav className=" fixed z-40 w-full mx-aut   bg-[#0a192f] shadow-lg cursor-pointer">
        <div className="max-w-screen-xl  py-3 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-[#64FFDA] text-xl flex items-center gap-2">
                {" "}
                <span className="border border-[#64FFDA] rounded-full">
                  {" "}
                  <Image
                    className="p-[2px] w-10 h-10 rounded-full"
                    src="/sanims.png"
                    alt="sanim"
                    height={40}
                    width={40}
                  />
                </span>{" "}
                Sanim Mia
              </h2>
              <div className="flex lg:hidden gap-3 items-center">
                <div className="">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    {!isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8h16M4 16h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-x-0 z-20 w-1/2 px-6 py-4  transition-all duration-300 ease-in-out lg:h-min  h-screen bg-[#0a192f] dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center  lg:mx-8">
                {navLinks?.map((item) => (
                  <Link
                    key={item?.href}
                    href={item?.href}
                    className={`${
                      pathname === item?.href
                        ? "text-[#64FFDA] font-bold mx-3"
                        : "text-[#CCD6F6] hover:text-[#64FFDA] mx-3"
                    }`}
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>

              {session ? (
                <Button
                  className="bg-red-500 hover:bg-white"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              ) : (
                <Link href={"/login"}>
                  <Button className="bg-[#64FFDA] hover:bg-white text-black">
                    {" "}
                    sign in
                  </Button>
                </Link>
              )}

              {/* <div className="lg:grid hidden">
                {user ? (
                  <div className="relative inline-block">

                    <button
                      onClick={() => setIsOpens(!isOpens)}
                      className="relative z-10 "
                    >
                      <img
                        className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                        src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                        alt="jane avatar"
                      />
                    </button>


                    {isOpens && (
                      <div
                        className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                        onClick={() => setIsOpens(false)}
                      >
                        <a
                          href="#"
                          className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <img
                            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                            alt="jane avatar"
                          />
                          <div className="mx-1">
                            <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                              Jane Doe
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              janedoe@exampl.com
                            </p>
                          </div>
                        </a>

                        <hr className="border-gray-200 dark:border-gray-700" />

                        <a
                          href="#"
                          className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5 mx-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span className="mx-1">View Profile</span>
                        </a>
                        <button
                          className="mx-1  p-3  hover:bg-gray-100"
                          onClick={handileClickLogout}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={"/login"}
                    className={() =>
                      pathname
                        ? "text-white font-semibold py-2 mx-3 mt-2"
                        : " py-2 mx-3 mt-2 hover:text-white  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 text-gray-400"
                    }
                  >
                    Sign in
                  </NavLink>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Naver;
