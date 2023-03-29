// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            meta : [
                
            ],
            link : [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css'},
                { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=satoshi@300&display=swap'},
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css'},
                { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'},
  
            ],
            script : [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js',
                  async: true,
                  crossorigin: "anonymous"
                },
            ]
        }
    },
    css: [
        '@/public/css/style.css',
    ],
    modules: [
        '@nuxt/image-edge',
    ],
})
