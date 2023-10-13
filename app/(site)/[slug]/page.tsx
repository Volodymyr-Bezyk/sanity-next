import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1 className="text-5xl drop-shadow-xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent max-w-max">
        {page.title}
      </h1>
      <div className=" text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
};

export default Page;
