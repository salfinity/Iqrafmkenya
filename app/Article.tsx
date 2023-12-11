import Image from "next/image";
import ReadMoreButton from "./ReadMoreButton";
import LiveTimeStamp from "./LiveTimeStamp";

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  const imageWidth = 300; // Set a reasonable width for your images
  const imageHeight = 150;
  return (
    <article
      className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-md
  shadow-lg hover:scale-105 hover:shadow-xl 
  hover:bg-slate-200 transition-all duration-200 ease-out"
    >
      {article.image && (
        <Image
          src={article.image}
          alt={article.title}
          layout="fixed"
          objectFit="cover"
          width={imageWidth}
          height={imageHeight}
          className="h-56 rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>

          <section className="at-2 flex-1">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </section>

          <footer
            className="text-xs text-right ml-auto flex space-x-1
       pt-5 italic text-gray-400"
          >
            <p>{article.source} -</p>
            <p>
              <LiveTimeStamp time={article.published_at} />
            </p>
          </footer>
        </div>

        {/* read more Button */}
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
