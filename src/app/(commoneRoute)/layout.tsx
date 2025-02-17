import Footer from "@/components/Shared/Footer";
import Naver from "@/components/Shared/Naver";
import { authOptions } from "@/utils/authOptions";
import { getServerSession, Session } from "next-auth";
import { ReactNode } from "react";

const layout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const session: Session | null = await getServerSession(authOptions);
  return (
    <div>
      <Naver session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
