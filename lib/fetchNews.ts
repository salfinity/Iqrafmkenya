import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  let news: NewsResponse = {
    length: 0,
    pagination: {
      count: 0,
      limit: 0,
      offset: 0,
      total: 0,
    },
    data: [],
  };

  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "ke"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  try {
    const res = await fetch(
      "https://aubenas.stepzen.net/api/gaudy-goose/__graphql",
      {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
          query,
          variables: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: category,
            keywords: keywords,
          },
        }),
      }
    );

    console.log(
      "LOADING NEW DATA FROM API for category >>>",
      category,
      keywords
    );

    const newsResponse = await res.json();

    if (newsResponse?.data) {
      news = sortNewsByImage(newsResponse?.data?.myQuery);
    } else {
      console.log("No news Data : ", newsResponse?.errors?.message);
    }
  } catch (err) {
    console.log("No News Error : ", err);
  }

  return news;
};
export default fetchNews;
//stepzen import curl "http://api.mediastack.com/v1/news?access_key=abc&sources=business,sports"
