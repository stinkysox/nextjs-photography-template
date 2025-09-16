/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com", "picsum.photos", "i.postimg.cc"], // allow Pinterest, Picsum, Postimg
    formats: ["image/avif", "image/webp"], // modern image formats for better performance
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
