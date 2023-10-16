import { groq } from "next-sanity";

export const GET_PRODUCTS = groq`*[_type == "project"]{
_id,
_createdAt,
name,
"slug":slug.current,
"image":image.asset -> url,
url,
content,
price
    }`;

export const GET_PRODUCT = groq`*[_type == "project" && slug.current == $slug][0]{
_id,
_createdAt,
name,
"slug":slug.current,
"image":image.asset -> url,
url,
content,
price
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

export const GET_ITEMS = groq`*[_type == "item"]{
_id,
_createdAt,
name,
"slug":slug.current,
"image":image.asset -> url,
content,
price
    }`;

export const GET_ITEM = groq`*[_type == "item" && slug.current == $slug][0]{
_id,
_createdAt,
name,
"slug":slug.current,
"image":image.asset -> url,
content,
price
    }`;
