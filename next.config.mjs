/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
    domains: [
      "newsarenaindia.com",
      "api.newsarenaindia.com",
      "devapi.newsarenaindia.com",
      "dev.newsarenaindia.com",
    ], // Add your image domains here
  },
};

export default nextConfig;
