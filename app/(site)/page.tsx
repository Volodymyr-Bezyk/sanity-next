import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="max-w-max text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        SuperStore
      </h1>

      <p className="mt-3 text-xl text-gray-600">Welcome to our online store!</p>
      <h2 className="mt-10 font-bold text-gray-700 text-3xl ">
        Today on sale:
      </h2>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`sale/${project.slug}`}
            className="p-5 border border-gray-500 rounded-lg hover:border-blue-500 focus:border-blue-500 hover:scale-110 focus:scale-105 transition"
          >
            <div className="max-w-max font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className=" mt-5 object-contain rounded-lg w-full h-[200px] object-center "
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
