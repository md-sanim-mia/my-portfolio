const ProjectDeatilPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/get-single-project/${id}`, {
    cache: "no-store",
  });
  const project = await res.json();
  return (
    <div>
      <div className=" min-h-screen  p-6 flex justify-center items-center">
        <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <p>
            <strong>Date:</strong> {project.date}
          </p>
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
          <p>
            <strong>Technologies:</strong> {project.technology.join(", ")}
          </p>
          <div className="mt-4">
            <a
              href={project.live_link}
              target="_blank"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Live Site
            </a>
            <a
              href={project.github_link}
              target="_blank"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDeatilPage;
