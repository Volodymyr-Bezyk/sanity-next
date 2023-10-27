import { createClient } from "next-sanity";
import { Item } from "@/sanity/types/Projects";
import clientConfig from "./config/client-config";
import { GET_PAGE, GET_PAGES, GET_ITEMS, GET_ITEM } from "./queries";
import { Page } from "./types/Page";

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(GET_PAGES);
}
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(GET_PAGE, { slug });
}

export async function getItems(): Promise<Item[]> {
  return createClient(clientConfig).fetch(GET_ITEMS);
}
export async function getItem(slug: string): Promise<Item> {
  return createClient(clientConfig).fetch(GET_ITEM, { slug });
}
