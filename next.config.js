module.exports = {
  images: {},
  trailingSlash: true,
  exportPathMap: async function() {
    return {
      '/': { page: '/'},
      '/about': { page: '/about'},
      '/cv': { page: '/cv'}
    }
  }
}