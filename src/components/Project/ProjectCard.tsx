import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Eye } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div>
      <Card className="w-full text-[#CCD6F6] h-full bg-gray-800 relative group overflow-hidden border rounded-lg shadow-lg">
        <div className="relative group">
          <img
            className="h-64 w-full object-cover rounded-t-lg group-hover:opacity-70"
            src={project?.image}
            alt=""
          />

          {/* Hover Options - Only on Image */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link target="_blank" href={`${project?.github_link}`}>
              <Button className="bg-white text-black hover:bg-[#64FFDA] hover:text-[#0A192F] p-3 rounded-full shadow-md">
                github link
              </Button>
            </Link>
            <Button className="bg-white text-black p-3  hover:bg-[#64FFDA] hover:text-[#0A192F] rounded-full shadow-md">
              <Link href={`/projects/${project?._id}`}> view project </Link>
            </Button>
            <Link target="_blank" href={`${project?.live_link}`}>
              {" "}
              <Button className="bg-white text-black hover:bg-[#64FFDA] hover:text-[#0A192F] p-3 rounded-full shadow-md">
                live link
              </Button>
            </Link>
          </div>
        </div>
        <CardHeader>
          <CardTitle>{project?.title}</CardTitle>
          <CardDescription className="text-[#CCD6F6]">
            {" "}
            {project?.description}{" "}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProjectCard;
