//import { useState, useEffect } from "react";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import Footer from "./Footer";
import response from "../response.json";

async function Homepage() {
    // Fetch news data
    const news: NewsResponse = await fetchNews(categories.join(","));
    
    console.log(news)
      
  return (
     <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-7xl">
          <h1 className="font-serif text-2xl md:text-4xl mt-3">
            <span className="underline decoration-6 decoration-orange-400">LATEST</span> NEWS
          </h1>
        <NewsList news={news} />
      </div>     
  );
}


export default Homepage;
