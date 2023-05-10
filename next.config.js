/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["loremflickr.com", "admin-angeetvie.go.yj.fr"],
  },
  env :{
    SITE_URL:process.env.SITE_URL
  }
}