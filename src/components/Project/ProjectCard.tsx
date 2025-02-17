import { TProject } from "@/types/gobol.type";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div>
      <Card className="w-full text-[#CCD6F6] h-full bg-gray-800 relative group overflow-hidden border rounded-lg shadow-lg">
        <div className="relative group">
          <Image
            src={project?.image}
            height={256}
            width={600}
            className="h-64 w-full object-cover rounded-t-lg group-hover:opacity-70"
            alt="project iamge"
          />

          {/* Hover Options - Only on Image */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link target="_blank" href={`${project?.github}`}>
              <Button className="bg-white text-black hover:bg-[#64FFDA] hover:text-[#0A192F] p-3 rounded-full shadow-md">
                github link
              </Button>
            </Link>
            <Button className="bg-white text-black p-3  hover:bg-[#64FFDA] hover:text-[#0A192F] rounded-full shadow-md">
              <Link href={`/projects/${project?._id}`}> view project </Link>
            </Button>
            <Link target="_blank" href={`${project?.liveSite}`}>
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
