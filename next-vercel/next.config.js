/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  env: {
    DOMAIN: process.env.DOMAIN,
    MONGODB_URI: ''
  }  
}
