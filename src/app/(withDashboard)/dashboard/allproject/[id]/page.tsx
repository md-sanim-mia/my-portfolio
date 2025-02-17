import UpdateProjectForm from "@/components/Project/UpdateProjectForm";

const UpadateProjectPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(
    `https://protfilo-server.vercel.app/get-single-project/${id}`,
    {
      cache: "no-store",
    }
  );
  const project = await res.json();
  console.log(project);
  return (
    <div>
      <UpdateProjectForm formData={project} />
    </div>
  );
};

export default UpadateProjectPage;
