/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore build errors in production
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable React strict mode for now to avoid double rendering issues
  reactStrictMode: false,
}

module.exports = nextConfig 