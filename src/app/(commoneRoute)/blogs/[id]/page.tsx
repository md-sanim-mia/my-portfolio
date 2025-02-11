import BlogDetailsCard from "@/components/Blogs/BlogDeatilsCard";
import React from "react";

const BlogDeatilsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/get-single-blog/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <BlogDetailsCard blog={data} />
    </div>
  );
};

export default BlogDeatilsPage;
