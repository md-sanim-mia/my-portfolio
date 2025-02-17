import Banner from "@/components/Home/Banner";
import Skills from "@/components/Home/Skills";
import ProjectCard from "@/components/Project/ProjectCard";
import { TProject } from "@/types/gobol.type";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sanim Mia | Home",
};
export default async function Home() {
  const res = await fetch("https://protfilo-server.vercel.app/allProjects", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <Skills />
      <h2 className=" mb-8 capitalize text-4xl font-bold text-[#64FFDA]">
        featured projects
      </h2>
      <div className="grid lg:grid-cols-3  gap-8">
        {data?.slice(0, 6)?.map((item: TProject, index: number) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
}
