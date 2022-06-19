const WindiCSS = require('windicss-webpack-plugin')
const withMDX = require('@next/mdx')()

module.exports = withMDX({
  webpack(config, { isServer }) {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    config.plugins.push(new WindiCSS())

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: [
      'a.storyblok.com',
      'images.unsplash.com',
      'localhost',
      'static.ghost.org',
      '933413-defite.tmweb.ru',
    ],
  },
})
