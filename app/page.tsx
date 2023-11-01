"use client";

import React, { useState } from "react";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import response from "@/response.json";
import Footer from "./Footer";

type Props = {
  news: NewsResponse;
};

async function Homepage() {
  const [showNews, setShowNews] = useState(false);
  const [news, setNews] = useState<NewsResponse | null>(null);

  const loadNews = async () => {
    //fetch news data
    const fetchedNews: NewsResponse = await fetchNews(categories.join(","));
    setNews(fetchedNews);
  };

  const filterNews = (category: string, news: Object) => {
    return news.filter((item: { category: string }) => item.category.toLowerCase() === category.toLowerCase());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-serif text-2xl md:text-4xl mt-3">
        <span className="underline decoration-6 decoration-orange-400">LATEST</span> NEWS
      </h1>
      <button
        onClick={() => {
          setShowNews(!showNews);
          if (!showNews) {
            loadNews();
          }
        }}
        className="bg-rose-950 hover:bg-rose-800  text-white font-bold py-2 px-4 rounded mt-4"
      >
        {showNews ? "Hide News" : "Show News"}
      </button>
      {showNews && news && <NewsList news={news} />}
      <Footer />
    </div>
  );
}

export default Homepage;
