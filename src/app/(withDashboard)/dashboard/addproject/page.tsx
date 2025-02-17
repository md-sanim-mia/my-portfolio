import ProjectForm from "@/components/Project/ProjectForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sanim Mia | Created Project",
};
const AddProjectPage = () => {
  return (
    <div>
      <ProjectForm />
    </div>
  );
};

export default AddProjectPage;
