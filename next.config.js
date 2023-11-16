/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.merriam-webster.com'
      }
    ]
  }
}

module.exports = nextConfig
