import Image from "next/image";
import Link from "next/link";
import { getItems } from "@/sanity/sanity-utils";

export const revalidate = 10;

export default async function Home() {
  const products = await getItems();

  return (
    <div>
      <p className="mt-3 text-xl text-gray-600">Welcome to our online store!</p>
      <h2 className="mt-10 font-bold text-gray-700 text-3xl ">
        Today on sale:
      </h2>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`sale/${product.slug}`}
            className="p-5 border border-gray-500 rounded-lg hover:border-blue-500 focus:border-blue-500 hover:scale-110 focus:scale-105 transition"
          >
            <div className=" flex items-center justify-between">
              <div className="max-w-max font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {product.name}
              </div>
              <p className=" max-w-max font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {`${product.price}$`}
              </p>
            </div>

            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
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
