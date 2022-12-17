/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', "youtube.com", "media.giphy.com", "ssl.gstatic.com"],
  },
}

module.exports = nextConfig
