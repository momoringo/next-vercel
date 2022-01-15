/** @type {import('next').NextConfig} */
 const conf = {
  //trailingSlash: process.env.VERCEL_ENV !== 'preview' ? true : false,
  reactStrictMode: true,
  env: {
    DOMAIN: process.env.DOMAIN,
    MONGODB_URI: process.env.MONGODB_URI
  },
  images: {
    loader: 'imgix',
    path: 'https://jamthomdev.imgix.net',
  }  

}


module.exports = conf
