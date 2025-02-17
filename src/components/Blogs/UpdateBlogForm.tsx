"use client";
import { TBlogs } from "@/types/gobol.type";
import ImageGenetors from "@/utils/ImageGenerator";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateBlogForm = ({ formData }: { formData: Partial<TBlogs> }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let images = formData?.image;
    if (data?.image && data.image.length > 0 && data.image[0] !== "") {
      images = await ImageGenetors(data.image[0]);
    }
    const blogData = {
      image: images,
      title: data?.title || formData?.title,
      content: data?.description || formData?.content,
    };
    const res = await fetch(
      `https://protfilo-server.vercel.app/updated-blog/${formData?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      }
    );
    const datas = await res.json();
    if (datas.modifiedCount) {
      toast.success("blog succes fully updated ");
      router.push("/dashboard/allblogs");
    }
    console.log(datas);
  };
  console.log(errors);
  return (
    <div className=" lg:w-[45%] mx-auto bg-white shadow-lg rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
          Create Blog
        </h2>
        <div className=" gap-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              defaultValue={formData?.title}
              {...register("title")}
              type="text"
              className="mt-1 text-black  w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>
        </div>
        {/* Blog Image (URL Input) */}
        <div className="my-5">
          <label
            htmlFor="blog_image"
            className="text-sm font-medium text-gray-700"
          >
            Blog Image
          </label>
          <input
            {...register("image")}
            type="file"
            className="mt-1 w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
            placeholder="Paste image URL here"
          />
        </div>
        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            defaultValue={formData?.content}
            {...register("description")}
            rows={4}
            className="mt-1 text-black  w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
            placeholder="Enter blog description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default UpdateBlogForm;
