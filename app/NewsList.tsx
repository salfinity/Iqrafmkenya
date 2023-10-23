import Article from "./Article";

type Props = {
 news: NewsResponse;
};

function NewsList({ news }: Props) {
 if (!news || !news.data) {
  // Handle the case where news or news.data is undefined or null
  return null; // or you can return a loading message or some other fallback UI
}
  return ( 
   <main className="grid h-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
   p-10 gap-10"> 
    {news.data.map((article) => (
      <Article key={article.title} article={article} />
    ))}
   </main>
   );
 }

export default NewsList;