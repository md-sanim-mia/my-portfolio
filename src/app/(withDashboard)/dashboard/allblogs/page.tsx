import AllBlogs from "@/components/Blogs/AllBlogs";

const AllBlogsPage = async () => {
  const res = await fetch("https://protfilo-server.vercel.app/get-all-blogs", {
    cache: "no-store",
    next: { tags: ["blogs"] },
  });
  const data = await res.json();

  return (
    <div>
      <AllBlogs data={data} />
    </div>
  );
};

export default AllBlogsPage;
