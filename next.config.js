// const { redirect } = require("next/dist/next-server/server/api-utils")

module.exports = {
  images: {},
  target: 'serverless',
  trailingSlash: true,
  exportPathMap: async function() {
    return {
      '/': { page: '/'},
      '/about': { page: '/about'},
      '/cv': { page: '/cv'},
    }
  },
  redirects: async function() {
    return [
      {
        source: '/spir',
        destination: process.env.ADJUST_SCHEDULE_URL || '/',
        permanent: true,
      },
    ]
  }
}