import fetchNews from "@/lib/fetchNews";
import NewsList from "@/app/NewsList";
import { categories } from "@/constants";

type Props = {
 params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
 const news: NewsResponse = await fetchNews (category);

 return (
  <div className="h-full">
      <h1 className="headerTitle"> {category}</h1>
      <NewsList news={news} /> 
   </div>
 ); 
}

export default NewsCategory;

//this last function below helps all the 
//pages(health, entertainment, business, sports, general,....) 
//to prebuild each time according to the revalidation time of 20 seconds 
export async function generateStaticParams() {
 return categories.map((category) => ({
  category: category,
 }));
}