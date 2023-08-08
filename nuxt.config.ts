// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app:{
    head:{
      title: '爪哇导航鸭',
    }
  },
  devtools: { enabled: true },
  devServer:{
    port: 8080,
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer'],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc','@css-render/vue3-ssr','@juggle/resize-observer','date-fns-tz/esm/formatInTimeZone']
          : []
    }
  },
  
})

