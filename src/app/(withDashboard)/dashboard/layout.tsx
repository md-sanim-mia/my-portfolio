import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className=" flex flex-1">
      {" "}
      <Sidebar />
      <div className="flex-1  lg:ml-64">
        <div className="px-3 py-4 max-w-screen-xl mx-auto min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
