/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@afrivon/ui", "@afrivon/auth", "@afrivon/utils"]
}

module.exports = nextConfig