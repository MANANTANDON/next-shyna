import { INIT_URL } from "@/constant";
async function generateSiteMap() {
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
    <loc>${INIT_URL}articles</loc>
    <lastmod>2025-02-02</lastmod>
    <priority>0.9</priority>
    </url>
    <url>
    <loc>${INIT_URL}privacy-policy</loc>
    <lastmod>2025-02-02</lastmod>
    <priority>0.9</priority>
    </url>
    <url>
    <loc>${INIT_URL}terms-and-condition</loc>
    <lastmod>2025-02-02</lastmod>
    <priority>0.9</priority>
    </url>
</urlset>`;
}

export default async function SiteMap(req, res) {
  const sitemap = await generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
