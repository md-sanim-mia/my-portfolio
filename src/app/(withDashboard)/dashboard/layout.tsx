import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className=" flex flex-1">
      {" "}
      <Sidebar />
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default layout;
