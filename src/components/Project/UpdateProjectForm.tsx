"use client";
import { TProject } from "@/types/gobol.type";
import ImageGenetors from "@/utils/ImageGenerator";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateProjectForm = ({ formData }: { formData: TProject }) => {
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
    const ProjectData = {
      image: images,
      title: data?.title || formData?.title,
      description: data?.description || formData?.description,
      technologies:
        (data.technologies && data?.technologies.split(" ")) ||
        formData?.technologies,
      duration: data?.duration || formData?.duration,
      github: data?.github || formData?.github,
      liveSite: data?.liveSite || formData?.liveSite,
    };

    const res = await fetch(
      `https://protfilo-server.vercel.app/updated-project/${formData?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ProjectData),
      }
    );
    const datas = await res.json();
    if (datas.modifiedCount) {
      toast.success("project succes fully updated ");
      router.push("/dashboard/allproject");
    }

    console.log(datas, errors);
  };
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
              defaultValue={formData?.title}
              {...register("title")}
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
              defaultValue={formData?.duration}
              {...register("duration")}
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
              defaultValue={formData?.github}
              {...register("github")}
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
              defaultValue={formData?.liveSite}
              {...register("liveSite")}
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
            {...register("technologies")}
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
            {...register("image")}
            type="file"
            className="mt-1 w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            defaultValue={formData?.description}
            {...register("description")}
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

export default UpdateProjectForm;
