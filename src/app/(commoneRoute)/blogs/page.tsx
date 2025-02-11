import BlogCard from "@/components/Blogs/BlogCard";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/get-all-blogs", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative w-full bg-gradient-to-r from-blue-500 to-purple-700 py-16 text-white text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Explore Our Blogs</h1>
        <p className="text-lg opacity-80">
          Discover innovative solutions built with modern technologies
        </p>
      </div>
      <div className="grid mt-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.map((item: any) => (
          <BlogCard key={item?._id} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
