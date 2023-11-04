import React from "react";
import fetchNews from "@/lib/fetchNews";
import NewsList from "@/app/NewsList";
import { categories } from "@/constants";

type Category = string; // Define your Category type if not already defined

type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
};

type Article = {
  author: string;
  country: string;
  description: string;
  image: string;
  language: string;
  published_at: string; // Use string or a specific date format
  source: string;
  title: string;
  url: string;
};

type NewsResponse = {
  pagination: Pagination | null;
  data: Article[];
};

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  try {
    const news: NewsResponse = (await fetchNews(category)) ?? { pagination: null, data: [] };
    return (
      <div className="h-full">
        <h1 className="headerTitle">{category}</h1>
        <NewsList news={news} />
      </div>
    );
  } catch (error) {
    // Handle the error (e.g., show an error message to the user)
    console.error("Error fetching news:", error);
    return <div>Error fetching news</div>;
  }
}

// This function helps all the pages (health, entertainment, business, sports, general, etc.) 
// to prebuild each time according to the revalidation time of 20 seconds 
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
