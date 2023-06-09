export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Crux-sa',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    },
    bodyAttrs: {
      class: 'light-layout'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;600;700;800&display=swap'
      },

      {
        rel: 'stylesheet',
        href: '/fix.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/font.scss',
    '~/assets/scss/override/rtl-override.scss',
    '~/assets/scss/core.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/settings/layout.js',
    { src: '~/plugins/settings/lottie-player.js', mode: 'client' },
    '~/plugins/settings/vee-validate.js',
    '~/plugins/catchError.js',
    '~/plugins/fetch.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtclub/feathericons',
    '@braid/vue-formulate/nuxt'
  ],

  formulate: {
    configPath: '~/formulate.config.js'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    'nuxt-vue-select',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
    [
      'vue-toastification/nuxt',
      {
        timeout: 4000,
        draggable: false,
        position: 'top-center'
      }
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyB8yINt59kpAMI0wGfogUJloqwBwzPq7OM',
          authDomain: 'crux-sa-e9e12.firebaseapp.com',
          projectId: 'crux-sa-e9e12',
          storageBucket: 'crux-sa-e9e12.appspot.com',
          messagingSenderId: '611063051025',
          appId: '1:611063051025:web:97109edb2e4d0ac65ad2b0'
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ]
  ],

  i18n: {
    lazy: false,
    langDir: 'locales/',
    locales: [
      {
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar',
        dir: 'rtl',
        name: 'Arabic',
        name_ar: 'العربية'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en',
        dir: 'ltr',
        name: 'English',
        name_ar: 'الإنجليزية'
      }
    ],
    defaultLocale: 'ar',
    detectBrowserLanguage: false
  },

  auth: {
    plugins: ['~/plugins/currentUser.js'],

    localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'token'
        },
        user: {
          property: 'data.data'
        },
        endpoints: {
          // user: { url: '/users/me', method: 'get' }
          user: false
        }
      }
    },
    redirect: {
      login: '/panel',
      logout: '/login',
      callback: '/login',
      home: '/panel'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://lakohouseapi-3r7n.onrender.com/api/v1',
    // baseURL: 'http://127.0.0.1:5678/api/v1'
  },

  generate: {
    fallback: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {
    SITE_TITLE: 'Crux-sa'
    // NODE_URL_images: 'http://127.0.0.1:5678/images/'
  }
}
