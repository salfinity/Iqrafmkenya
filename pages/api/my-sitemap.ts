// import { SitemapStream, streamToPromise } from "sitemap";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import { NextApiRequest, NextApiResponse } from "next"; // Import NextApiRequest

interface SitemapLink {
  url: string;
  changefreq: string;
  priority: number;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // An array with your links
    const links: SitemapLink[] = [];
    {
      /* getAllPostSlugs().map((post) => {
      links.push({
        url: `/blog/${post.params.slug}`,
        changefreq: "daily",
        priority: 0.9,
      });
    }); */
    }

    // Add other pages
    const pages = [
      "/businesses",
      "/adverts",
      "/history",
      "/schedule",
      "/news",
      "/management",
      "/scholars",
      "/team",
      "/radio",
    ];
    pages.map((url) => {
      links.push({
        url,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data: any) => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
