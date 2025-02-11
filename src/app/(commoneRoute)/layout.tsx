import Footer from "@/components/Shared/Footer";
import Naver from "@/components/Shared/Naver";
import React, { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      {" "}
      <Naver />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
