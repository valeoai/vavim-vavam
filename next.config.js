/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static exports
  basePath: "/vavam-projectpage", // Updated to match new project name
  images: {
    unoptimized: true, // Required for static export
  },
  // GitHub Pages serves content from a subdirectory based on repo name
  assetPrefix: process.env.NODE_ENV === "production" ? "/vavam-projectpage" : "",
}

module.exports = nextConfig

