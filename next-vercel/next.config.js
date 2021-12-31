/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    DOMAIN: process.env.DOMAIN,
    MONGODB_URI: process.env.MONGODB_URI
  }  
}
