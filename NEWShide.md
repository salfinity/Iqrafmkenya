import React, { useEffect, useState } from "react";
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

export default Homepage;
