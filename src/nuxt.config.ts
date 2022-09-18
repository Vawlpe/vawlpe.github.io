// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',

    // Global page headers
    head: {
        title: 'vawlpe.github.io',
        htmlAttrs: {
          lang: 'en',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      },
    
    // Router
    router: {
        prefetchLinks: true,
        base: '/',
    },

    // Auto-import
    components: true,
    imports: {
      autoImport: true
    },

    // Modules for dev and build
    buildModules: [
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://color-mode.nuxtjs.org/
        '@nuxtjs/color-mode'
    ],

    // Module configs
    tailwindcss: {
        exposeConfig: true
    },
    colorMode: {
        classSuffix: ''
    },

    // Typescript support
    typescript: {
      shim: false,
      typeCheck: true,
    }
})
