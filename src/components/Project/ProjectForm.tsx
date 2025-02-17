"use client";
import ImageGenetors from "@/utils/ImageGenerator";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const images = await ImageGenetors(data?.image[0]);
    const ProjectData = {
      image: images,
      title: data?.title,
      description: data?.description,
      technologies: data?.technologies.split(" "),
      duration: data?.duration,
      github: data?.github,
      liveSite: data?.liveSite,
      date: formattedDate,
    };
    const res = await fetch("https://protfilo-server.vercel.app/add-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ProjectData),
    });
    const datas = await res.json();
    if (datas.insertedId) {
      toast.success("blog success fully created");
    }
  };
  console.log(errors);
  return (
    <div className="lg:w-[55%] mx-auto bg-white shadow-lg rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
          Create Project
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="mt-1 text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <input
              {...register("duration", { required: true })}
              type="text"
              className="mt-1 text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter project duration"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              GitHub Site
            </label>
            <input
              {...register("github", { required: true })}
              type="url"
              className="mt-1 text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter GitHub link"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Live Site
            </label>
            <input
              {...register("liveSite", { required: true })}
              type="url"
              className="mt-1 text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter live link"
            />
          </div>
        </div>

        <div className="my-5">
          <label className="block text-sm font-medium text-gray-700">
            Technologies
          </label>
          <input
            {...register("technologies", { required: true })}
            type="text"
            className="mt-1 text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
            placeholder="Enter technologies"
          />
        </div>

        <div className="my-5">
          <label className="text-sm font-medium text-gray-700">
            Project Image
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="mt-1 w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            rows={4}
            className="mt-1 text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
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

export default ProjectForm;
