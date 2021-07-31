const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  sassOption : {
      includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components/')]
  },
}, withCss())

module.exports = {
  reactStrictMode: true,
}

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}