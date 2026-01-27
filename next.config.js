/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory, so we need to set the base path
  // Update 'vrc-truesigner' to match your repository name if different
  basePath: process.env.NODE_ENV === 'production' ? '/vrc-truesigner' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vrc-truesigner/' : '',
}

module.exports = nextConfig
