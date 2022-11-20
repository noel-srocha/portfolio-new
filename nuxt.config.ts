// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        '~/assets/styles/_global.scss'
    ],
    build: {
        transpile: ['primevue']
    },
    modules: [
      "@nuxt/image-edge",
      "@vueuse/nuxt",
    ],
})
