"use client";

import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";
import { IoAlertCircle } from "react-icons/io5";
import NavlLinks from "./NavLinks";
import SearchBox from "./SearchBox";

async function Homepage() {
  // Fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log("news------>");
  console.log(news);

  return (
    <div
      className="flex flex-col items-center justify-center mx-auto mt-24 mb-24 max-w-6xl"
      id="home"
    >
      <h1 className="font-serif text-xl md:text-4xl text-center mt-6">
        <span
          className="underline decoration-6 
       decoration-orange-400"
        >
          CHECK OUT
        </span>{" "}
        NEWS
      </h1>
      <NavlLinks />
      {/* searchBox */}
      <SearchBox />
      {(!news || news?.data?.length === 0) && (
        <div className="w-full bg-cyan-200 gap-3 flex items-center justify-center radius-2 p-10">
          <span className="text-3xl font-medium text-slate-900">
            No News Available at the moment
          </span>
          <IoAlertCircle className="text-3xl font-medium text-red-600" />
        </div>
      )}{" "}
      {news && news?.data?.length > 0 && (
        <h1 className="font-serif text-2xl md:text-4xl mt-3">
          <span className="underline decoration-6 decoration-orange-400">
            LATEST
          </span>{" "}
          NEWS
        </h1>
      )}
      {news && news?.data?.length > 0 && <NewsList news={news} />}
    </div>
  );
}

export default Homepage;

{
  /*import React, { useEffect, useState } from "react";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

function Homepage() {
  const [news, setNews] = useState<NewsResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch news data
      const newsData: NewsResponse = await fetchNews(categories.join(","));
      setNews(newsData);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (!news) {
    // You can render a loading state or return null if news is not yet available
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-7xl">
      <h1 className="font-serif text-2xl md:text-4xl mt-3">
        <span className="underline decoration-6 decoration-orange-400">
          LATEST
        </span>{" "}
        NEWS
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;*/
}
{
  /* import { useState, useEffect } from "react";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

async function Homepage() {
  // Fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-7xl">
      <h1 className="font-serif text-2xl md:text-4xl mt-3">
        <span className="underline decoration-6 decoration-orange-400">
          LATEST
        </span>{" "}
        NEWS
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
 */
}
