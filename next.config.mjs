/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: `/survey/select-your-gender`,
        permanent: true
      }
    ];
  }
};

export default nextConfig;
