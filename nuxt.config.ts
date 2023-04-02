// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            meta : [
                
            ],
            link : [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css'},
                { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=satoshi&display=swap'},
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=satoshi&display=swap'},
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css'},
                { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'},
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'},
                // { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'},
  
            ],
            script : [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js',
                  async: true,
                  crossorigin: "anonymous"
                },
                // { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
                //   async: true,
                //   crossorigin: "anonymous"
                // },
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        '@/public/css/style.css',
    ],
    modules: [
        '@nuxt/image-edge',
    ],
})
