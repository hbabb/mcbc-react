global.importMetaEnv = {
  VITE_API_URL: 'https://mcbc-strapi-8b9bb.ondigitalocean.app/',
}

Object.defineProperty(global, 'import.meta', {
  value: {
    env: global.importMetaEnv,
  },
})
