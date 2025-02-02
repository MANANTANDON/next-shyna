import { INIT_URL } from "@/constant";
async function generateSiteMap() {
  return `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
      <loc>${INIT_URL}api/pages-sitemap.xml</loc>
   </sitemap>
    <sitemap>
     <loc>${INIT_URL}articles</loc>
   </sitemap>
</sitemapindex>`;
}

export default async function SiteMap(req, res) {
  const sitemap = await generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
