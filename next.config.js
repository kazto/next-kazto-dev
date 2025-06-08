// const { redirect } = require("next/dist/next-server/server/api-utils")

module.exports = {
  images: {},
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
      {
        source: '/dotfiles',
        destination: process.env.DOTFILES_INSTALL_SH_URL || '/',
        permanent: true,
      }
    ]
  }
}