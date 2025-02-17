import BlogDetailsCard from "@/components/Blogs/BlogDeatilsCard";
// export async function generateStaticParams() {
//   const res = await fetch("https://protfilo-server.vercel.app/get-all-blogs"); // সব ব্লগের ID আনুন
//   const blogs = await res.json();

//   return blogs.map((blog: any) => ({
//     id: blog._id,
//   }));
// }
// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const { id } = params;
//   console.log(id);
//   const res = await fetch(`https://protfilo-server.vercel.app/get-single-blog/${id}`, {
//     cache: "no-store",
//   });
//   const project = await res.json();
//   return {
//     title: project?.title,
//   };
// }

const BlogDeatilsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(
    `https://protfilo-server.vercel.app/get-single-blog/${id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  console.log(data);
  return (
    <div>
      <BlogDetailsCard blog={data} />
    </div>
  );
};

export default BlogDeatilsPage;
