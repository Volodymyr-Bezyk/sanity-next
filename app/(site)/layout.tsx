import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperStore",
  description: "Next + sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body
        className={`relative grid h-full grid-rows-[auto_1fr_auto] max-w-7xl mx-auto py-5 px-5 min-h-screen ${inter.className}`}
      >
        <header className="flex items-center justify-between ">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            SuperStore
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            <Link href="/cart" className="hover:underline focus:underline">
              Cart
            </Link>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline focus:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-10">{children}</main>
        <footer className="flex justify-around">
          <div>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
            >
              SuperStore
            </Link>
            <p className="text-sm text-gray-600">All rights reserved 2023</p>
          </div>
          <div>
            <p className="text-xl text-gray-600">We in socials:</p>
            <ul className="gap-5">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 hover:text-gray-800 focus:text-gray-800 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 hover:text-gray-800 focus:text-gray-800 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 hover:text-gray-800 focus:text-gray-800 transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 hover:text-gray-800 focus:text-gray-800 transition"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
