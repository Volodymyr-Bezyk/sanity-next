import { PortableText } from "@portabletext/react";
import { getProject } from "@/sanity/sanity-utils";

import React from "react";
import Image from "next/image";
type Props = {
  params: {
    project: string;
  };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className=" max-w-7xl mx-auto">
      <header className="flex justify-between items-center">
        <h1 className=" p-1 text-5xl drop-shadow-xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent max-w-max">
          {project.name}
        </h1>
        <a
          href={project.url || "/"}
          title="Additional info"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-800 hover:text-pink-200 focus:bg-pink-800 focus:text-pink-200 transition"
        >
          View item
        </a>
      </header>

      {/* content */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image */}
      <Image
        src={project.image}
        alt={project.name}
        height={1080}
        width={1920}
        className="h-[500px] max-w-3xl  p-5 mt-10 border-2 border-gray-700 object-contain rounded-xl"
      />
    </div>
  );
};

export default Project;
