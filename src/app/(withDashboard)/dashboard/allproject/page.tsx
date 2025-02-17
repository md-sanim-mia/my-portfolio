import AllProject from "@/components/Project/AllProject";

const AllProjectsPage = async () => {
  const res = await fetch("https://protfilo-server.vercel.app/allProjects", {
    cache: "no-store",
    next: { tags: ["projects"] },
  });
  const data = await res.json();

  return (
    <div>
      <AllProject data={data} />
    </div>
  );
};

export default AllProjectsPage;
