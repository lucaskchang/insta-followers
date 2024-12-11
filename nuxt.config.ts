// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    'nuxt-gtag',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Instagram Followers',
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

  compatibilityDate: '2024-09-07',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
});
