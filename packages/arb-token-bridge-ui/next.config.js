// @ts-check type next.config.js

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  distDir: 'build',
  productionBrowserSourceMaps: true,
  reactStrictMode: true,

  webpack: (config, { isServer, dev }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules([\\]+|\/)+(?!@arbitrum\/sdk\/dist\/)/
      }

      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/@arbitrum\/sdk\/dist/,
        use: ['babel-loader']
      })
    }

    return config
  }
}
