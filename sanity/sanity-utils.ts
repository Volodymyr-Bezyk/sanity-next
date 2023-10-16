import { createClient } from "next-sanity";
import { Product } from "@/sanity/types/Projects";
import clientConfig from "./config/client-config";
import { GET_PAGE, GET_PAGES, GET_PRODUCT, GET_PRODUCTS } from "./queries";
import { Page } from "./types/Page";

export async function getProducts(): Promise<Product[]> {
  return createClient(clientConfig).fetch(GET_PRODUCTS);
}

export async function getProduct(slug: string): Promise<Product> {
  return createClient(clientConfig).fetch(GET_PRODUCT, { slug });
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(GET_PAGES);
}
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(GET_PAGE, { slug });
}
