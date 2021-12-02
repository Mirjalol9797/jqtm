export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: 'universal',
  // target: 'server',
  
  head: {
    title: `Журналистларни қайта тайёрлаш маркази`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Ўзбекистон журналистларни қайта тайёрлаш маркази 1997 йилда ташкил қилинган бўлиб, 
      нодавлат нотижорат ташкилот, ОАВ вакиллари малакасини ошириш йўналишидаги таълим муассасаси ҳисобланади. Фаолиятимиз Ўзбекистонда 
      ривожланган фу қаролик жамиятини қуришда фаол ва ташаббускор журналистлар авлодини шакллантиришга қаратилган. Ҳозирда замонавий 
      журналистиканинг талаби ҳам шу. Журналист янгича нуқтаи назар, янгича фикрлаш ҳамда эркин мулоқотга киришиш кўникмаларига эга бўлса 
      ҳамда жамият тараққиётининг янги йўналишлари ва қонунчиликнинг янгича асосларига таянган ҳолда фаолият олиб борсагина мамлакат ривожига 
      муносиб ҳисса қўша олади. Марказ фаолиятида юртимиз журналистларининг ҳуқуқий билимларини юксалтириш, ихтисослаштириш, малакасини 
      ошириш, хорижлик ҳамкасблари билан тажриба алмашишларини ташкиллаштиришга алоҳида эътибор қаратилади. Бу борада хорижий ҳамкорларни 
      жалб этган ҳолда DVV, ЕҲХТ, БМТ, ЮНЕСКО, ЮСАИД, ЮНЕСКО, МОМЭМ ва бошқа қатор халқаро ва миллий давлат ва нодавлат 
      ташкилотлар ҳамкорлигида бир қатор ло­йиҳаларни амалга оширилмоқда.` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      // { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css " }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss' },
    { src: "aos/dist/aos.css"}
  ],

  
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/backToTop.js', ssr: false },
    { src: '~/plugins/inputMask.js', ssr: false },
    { src: "~/plugins/toast.js", ssr: false },
    { src: "~/plugins/aos.js", ssr: false },
  ],

  loading: {
    color: 'blue',
    height: 0
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios'
    [
      '@nuxtjs/axios',
      { baseURL: "https://jqtm.uz/api/" },
    ],
    [
      "nuxt-i18n",
      {
        lazy: true,
        locales: [
          { code: "uz", iso: "uz-UZ", name: "Uzbek", file: "uz.js" },
          { code: "ru", iso: "ru-RU", name: "Russian", file: "ru.js" },
        ],
        defaultLocale: "uz",
        rootRedirect: "uz",
        strategy: "prefix",
        // seo: false,
        // lazy: true,
        langDir: "lang/",
        // By default, custom routes are extracted from page files using acorn parsing,
        // set this to false to disable this
        parsePages: false,
        detectBrowserLanguage: {
          // cookieKey: 'i18n_cookie',
          useCookie: true,
          fallbackLocale: "uz"
        }
      }
    ],    
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ["aos"]
  }
}
