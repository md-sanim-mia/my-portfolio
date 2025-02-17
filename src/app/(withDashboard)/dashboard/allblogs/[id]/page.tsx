import UpdateBlogForm from "@/components/Blogs/UpdateBlogForm";
const UpdateBlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(
    `https://protfilo-server.vercel.app/get-single-blog/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div>
      <UpdateBlogForm formData={data} />
    </div>
  );
};

export default UpdateBlogPage;
