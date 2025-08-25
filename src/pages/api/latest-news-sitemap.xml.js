// import { INIT_URL, IMG_URI } from "@/constant";
// import { convertToIST } from "@/hooks/convertToIst";
// import { formatDateToDayMonth } from "@/hooks/formatDate";
// import { fetchAllArticles } from "@/lib/notion";

// export default async (req, res) => {
//   let startCursor = undefined;
//   const postResponse = await fetchAllArticles(startCursor, 6);

//   const posts = postResponse?.results || [];
//   console.log(
//     posts?.map(
//       (item) => item?.properties?.createdTime?.created_time,
//       "MANANANANANA"
//     )
//   );

//   const generateSitemap = () => {
//     const items =
//       posts.length > 0
//         ? posts
//             .map(
//               (post) => `
//         <url>
//             <loc>${INIT_URL}${
//                 post?.properties?.slug?.rich_text[0]?.plain_text
//               }</loc>
//             <lastmod>${convertToIST(
//               post?.properties?.createdTime?.created_time
//             )}</lastmod>

//         </url>`
//             )
//             .join("")
//         : "";

//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
//         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//             ${items}
//         </urlset>
//         `;

//     return xml;
//   };

//   // Set response headers
//   res.setHeader("Content-Type", "application/xml");

//   // Send XML sitemap
//   res.status(200).send(generateSitemap());
// };
