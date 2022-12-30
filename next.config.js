/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', "youtube.com", "lh3.googleusercontent.com", "ssl.gstatic.com"],
  },
}

module.exports = nextConfig
