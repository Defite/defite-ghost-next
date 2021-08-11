const WindiCSS = require('windicss-webpack-plugin').default
// const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();

module.exports = withMDX({ 
    

  webpack(config, { isServer }) {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.plugins.push(new WindiCSS())
    return config;
  },
})
