"use client"

import { categories } from '@/constants'
import fetchNews from "@/lib/fetchNews"
import NewsList from './NewsList';
import response from "@/response.json";
import Footer from './Footer';

type Props = {
  news: NewsResponse;
 };

 async function Homepage()  {
   //fetch news data
  const news: NewsResponse =  await fetchNews(categories.join(","));

  console.log('news');
  
  console.log(news);
  
  //timeout for loading the news page 3 seconds
  await new Promise((resolve) => setTimeout(resolve,3000));

  const filterNews = (category:string, news: Object) => {
    return news.filter((item: { category: string; }) => item.category.toLowerCase() === category.toLowerCase())
  }
  
  return (
   <div>
    <h1 className='font-serif text-2xl md:text-4xl text-center mt-3'>
       <span className='underline decoration-6 
       decoration-orange-400'>LATEST</span> {" "}
        NEWS</h1>
    <NewsList news={news} />
    <Footer />
  </div>
  );
}

export default Homepage;