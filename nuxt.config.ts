// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nuxt Boilerplate',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico',
        },
      ],
    },
  },

  css: ['@/assets/css/styles.scss'],

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
  ],

  gtag: {
    id: 'G-QNLZ5NY7HH',
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  compatibilityDate: '2024-09-07',
});
