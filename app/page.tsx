"use client";

import React, { useState, useEffect } from "react";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import Footer from "./Footer";

type Category = string;

type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
};

type Article = {
  author: string;
  category: string;
  country: string;
  description: string;
  image: string;
  language: string;
  published_at: string;
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

const Homepage = () => {
  const [showNews, setShowNews] = useState(false);
  const [news, setNews] = useState<NewsResponse | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        // Fetch news data
        const fetchedNews: NewsResponse = await fetchNews(categories.join(","));
        setNews(fetchedNews);
      } catch (error) {
        // Handle errors (e.g., show an error message to the user)
        console.error("Error fetching news:", error);
      }
    };

    if (showNews && !news) {
      loadNews();
    }
  }, [showNews, news]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-serif text-2xl md:text-4xl mt-3">
        <span className="underline decoration-6 decoration-orange-400">LATEST</span> NEWS
      </h1>
      <button
        onClick={() => {
          setShowNews(!showNews);
        }}
        className="bg-rose-950 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded mt-4"
      >
        {showNews ? "Hide News" : "Show News"}
      </button>
      {showNews && news && <NewsList news={news} />}
      <Footer />
    </div>
  );
};

export default Homepage;
