import { PortableText } from "@portabletext/react";
import { getProduct } from "@/sanity/sanity-utils";

import React from "react";
import Image from "next/image";
type Props = {
  params: {
    project: string;
  };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const product = await getProduct(slug);

  return (
    <div className=" max-w-7xl mx-auto">
      <header className="flex justify-between items-center">
        <h1 className=" p-1 text-5xl drop-shadow-xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent max-w-max">
          {product.name}
        </h1>
      </header>

      <div className="flex gap-10 mt-10">
        {/* image */}
        <Image
          src={product.image}
          alt={product.name}
          height={1080}
          width={1920}
          className="h-[500px] max-w-3xl  p-5  border-2 border-gray-700 object-contain rounded-xl"
        />
        {/* content */}
        <div className="text-lg text-gray-700 flex flex-col justify-between">
          <PortableText value={product.content} />
          <div>
            <p className=" mb-5 text-xl text-gray-700 font-bold">
              PRICE: ${product.price}
            </p>
            <button
              type="button"
              title="add item to cart"
              className="block bg-pink-800  rounded-lg  text-pink-200 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-900 hover:text-pink-300 focus:bg-pink-900 focus:text-pink-300 transition"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
