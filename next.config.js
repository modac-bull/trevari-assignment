const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  images: {
    domains: ['itbook.store'],
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
})
