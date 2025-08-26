/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
    domains: ["dev.snowchildstudio.com"],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      {
        source: "/pages-sitemap.xml",
        destination: "/api/pages-sitemap.xml",
      },
      {
        source: "/latest-news-sitemap.xml",
        destination: "/api/latest-news-sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
