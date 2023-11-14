import Article from "./Article";

type Props = {
 news: NewsResponse; 
};

function NewsList({ news }: Props) {
  return ( 
   <div className="max-w-7xl mx-auto" >
   <main className="grid h-3/4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4
   p-10 gap-10"> 
    {news.data.map((article) => (
      <Article key={article.title} article={article} />
    ))}
   </main>
   </div> 
   );
 }

export default NewsList;