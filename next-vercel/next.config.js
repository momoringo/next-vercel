/** @type {import('next').NextConfig} */
 const conf = {
  //trailingSlash: process.env.VERCEL_ENV !== 'preview' ? true : false,
  reactStrictMode: true,
  env: {
    DOMAIN: process.env.DOMAIN,
    MONGODB_URI: process.env.MONGODB_URI
  },
  async rewrites() {
    return {}
  }  
}


module.exports = conf
