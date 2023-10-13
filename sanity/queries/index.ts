import { groq } from "next-sanity";

export const GET_PROJECTS = groq`*[_type == "project"]{
_id,
_createdAt,
name,
"slug":slug.current,
"image":image.asset -> url,
url,
content
    }`;

export const GET_PROJECT = groq`*[_type == "project" && slug.current == $slug][0]{
_id,
_createdAt,
name,
"slug":slug.current,
"image":image.asset -> url,
url,
content
    }`;

export const GET_PAGES = groq`*[_type == "page"]{
_id,
_createdAt,
title,
"slug":slug.current,
    }`;

export const GET_PAGE = groq`*[_type == "page" && slug.current == $slug][0]{
_id,
_createdAt,
title,
"slug":slug.current,
content
    }`;
