import ProjectCard from "@/components/Project/ProjectCard";
import { TProject } from "@/types/gobol.type";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sanim Mia | Projects",
};
const AllProjectsPage = async () => {
  const res = await fetch("https://protfilo-server.vercel.app/allProjects", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative w-full bg-gradient-to-r from-blue-500 to-purple-700 py-16 text-white text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Explore Our Projects</h1>
        <p className="text-lg opacity-80">
          Discover innovative solutions built with modern technologies
        </p>
      </div>
      <div className="grid mt-12 lg:grid-cols-3  gap-8">
        {data.slice(0, 6)?.map((item: TProject, index: number) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
