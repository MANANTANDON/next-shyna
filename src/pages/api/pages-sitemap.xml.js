import { INIT_URL } from "@/constant";

async function generateSiteMap() {
  const today = new Date().toISOString().split("T")[0]; // e.g. 2025-08-26

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${INIT_URL}articles</loc>
      <lastmod>${today}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${INIT_URL}privacy-policy</loc>
      <lastmod>${today}</lastmod>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${INIT_URL}terms-and-condition</loc>
      <lastmod>${today}</lastmod>
      <priority>0.9</priority>
    </url>
  </urlset>`;
}

export default async function SiteMap(req, res) {
  try {
    const sitemap = await generateSiteMap();
    res.setHeader("Content-Type", "application/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generating pages sitemap:", error.message);
    res.status(500).send("Error generating pages sitemap");
  }
}
