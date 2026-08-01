import raw from "./blog.json";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  image?: string;
};

export const blogPosts = raw as BlogPost[];
