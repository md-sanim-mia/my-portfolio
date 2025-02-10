"use client";
import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="px-1  gap-4 flex-row-reverse lg:flex  items-center">
      <div className=" lg:py-0 py-5 lg:w-1/2  grid justify-center">
        <div className=" text-white rounded-full">
          <img
            className="object-cover shadow-lg object-center"
            style={{ boxShadow: "0 4px 7px rgba(255, 255, 255, 0.7)" }}
            src="/sanims.png"
            alt=""
          />
        </div>
      </div>
      <div className=" lg:w-2/3 ">
        <p className=" text-xl tracking-wider uppercase lg:mb-7 mb-3">
          Welcome to my world
        </p>
        <h2 className=" font-semibold lg:text-6xl md:text-4xl text-3xl text-[#8892B0] leading-normal ">
          Hi, I’m <span className="text-[#64FFDA]">Sanim Mia</span>
        </h2>
        <h2 className=" lg:text-6xl md:text-4xl text-4xl font-semibold text-[#8892B0] leading-normal mt-3 font-sans">
          <Typewriter
            loop
            words={["A Web Developer", "Professional Coder"]}
          ></Typewriter>
        </h2>
        <p className="text-xl mt-5 lg:mt-8 leading-normal font-sans">
          I am a creative MERN Stack Developer dedicated to transforming ideas
          into engaging web experiences. With a strong foundation in MongoDB,
          Express.js, React, and Node.js, I am passionate about building dynamic
          and responsive web applications. I thrive on continuous learning and
          exploring new technologies to enhance my skills and deliver
          high-quality projects.
        </p>

        <div className=" flex mt-4 lg:mt-14 items-center justify-between">
          <button className=" p-2  bg-[#64FFDA] hover:bg-[#64FFDA] border-none text-[#0A192F] rounded-full shadow-sm">
            <a
              href="/resume.pdf"
              download="resume"
              className="flex items-center gap-1"
            >
              {" "}
              Get Resume <FaArrowDown className="text-xl animate-bounce" />
            </a>
          </button>
          <div className="flex items-center gap-3  lg:gap-5 ">
            <button
              className="shadow-md hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#64FFDA] bg-transparent p-3 "
              style={{ boxShadow: "0 4px 7px rgba(255, 255, 255, 0.7)" }}
            >
              {" "}
              <FaGithub className="text-2xl" />
            </button>
            <button
              className="shadow-md hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#64FFDA] bg-transparent p-3 "
              style={{ boxShadow: "0 4px 7px rgba(255, 255, 255, 0.7)" }}
            >
              {" "}
              <FaLinkedin className="text-2xl" />
            </button>
            <button
              className="shadow-md hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#64FFDA] bg-transparent p-3"
              style={{ boxShadow: "0 4px 7px rgba(255, 255, 255, 0.7)" }}
            >
              {" "}
              <FaFacebook className="text-2xl" />
            </button>
            <button
              className="shadow-md hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#64FFDA] bg-transparent p-3 "
              style={{ boxShadow: "0 4px 7px rgba(255, 255, 255, 0.7)" }}
            >
              {" "}
              <FaInstagramSquare className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
