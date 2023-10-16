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
      <body className={` max-w-7xl mx-auto py-10 ${inter.className}`}>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            SuperStore
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
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
        <footer></footer>
      </body>
    </html>
  );
}
