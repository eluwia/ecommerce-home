export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  debug: process.env.NODE_ENV === 'development',
  css: ['~/assets/css/tokens.css', '~/assets/css/base.css']
})
