import { createClient } from "next-sanity";
import { Project } from "@/sanity/types/Projects";
import clientConfig from "./config/client-config";
import { GET_PAGE, GET_PAGES, GET_PROJECT, GET_PROJECTS } from "./queries";
import { Page } from "./types/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(GET_PROJECTS);
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(GET_PROJECT, { slug });
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(GET_PAGES);
}
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(GET_PAGE, { slug });
}
