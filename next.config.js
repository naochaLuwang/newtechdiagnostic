/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com','images.unsplash.com'], // Add the Firebase storage domain here
  },
  // Other Next.js config options can go here
}

module.exports = nextConfig
