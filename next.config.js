/** @type {import('next').NextConfig} */

// Determine if running in GitHub Actions CI/CD
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

// Get the base path from environment variable (set in GitHub Actions)
// or use empty string for local development
const basePath = isGitHubActions ? (process.env.NEXT_PUBLIC_BASE_PATH || '') : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory, so we need to set the base path
  // This will be set via NEXT_PUBLIC_BASE_PATH environment variable in GitHub Actions
  // and will be empty for local development
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
}

module.exports = nextConfig
