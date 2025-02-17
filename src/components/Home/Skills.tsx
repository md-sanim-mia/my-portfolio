"use client";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];
  return (
    <div className="my-20 ">
      <h2 className="text-center capitalize text-4xl font-bold text-[#64FFDA]">
        my Skills
      </h2>
      <div className="grid mt-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {skills?.map((item, index: number) => (
          <div
            key={index}
            className="bg-[#CCD6F6] hover:bg-white transition-transform duration-300 hover:scale-105 cursor-pointer p-5 rounded-md text-center grid items-center justify-center  w-full"
          >
            <h2 className="text-5xl text-center grid justify-center">
              {item.icon}
            </h2>
            <h2 className="text-2xl  text-[#0A192F] font-bold text-center mt-3">
              {" "}
              {item?.name}{" "}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
