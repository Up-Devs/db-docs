const { config } = require("vuepress-theme-hope");

module.exports = config({
 title: 'Up-Devs.DB',
 description: 'An useful data-base for your projects. Helpful for storing your datas.',
 base: "/guide/",

 head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/guide/updevs-db.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/guide/updevs-db.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/guide/updevs-db.png"}],
    ['link', { rel: 'icon', href: '/guide/updevs-db.png' }],
    ['meta', { name: 'theme-color', content: '#FFE200' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
 ],
  
 markdown: {
    lineNumbers: true
 }, 
  
 themeConfig: {
      sidebarDepth: 3,
      editLinks: true,
      lastUpdated: true,
      blog: false,
      repo: 'Up-Devs/up-devs.db',
      docsRepo: 'Up-Devs/db-docs',
      docsDir: 'guide',
      docsBranch: 'guide',
      logo: '/updevs-db.png',
      nav: [
          { text: "Guide", link: "/guide/" },
          { text: "Docs", link: "https://updevs-db.js.org/" },
          { text: "Discord", link: "https://discord.gg/PhW2XJa2yy" }
      ],
      footer: {
        display: true,
        copyright: "Copyright © 2021 Up Devs",
      },
      mdEnhance: {
        tasklist: true,
      },
      sidebar: {
        '/guide/': [
          {
            title: 'Getting Started',
            collapsable: false,
            children: [
              'start/installation',
            ]
          },
        ]
      },
   },
 
   pwa: {
    favicon: "/guide/updevs-db.png",
    themeColor: "#FFE200",
    cachePic: true,
    apple: {
      icon: "/guide/updevs-db.png",
      statusBarColor: "black",
    },
    msTile: {
      image: "/guide/updevs-db.png",
      color: "#ffffff",
    },
    manifest: {
      icons: [
        {
          src: "/guide/updevs-db.png",
          sizes: "512x512",
          purpose: "maskable",
          type: "image/png",
        },
        {
          src: "/guide/updevs-db.png",
          sizes: "192x192",
          purpose: "maskable",
          type: "image/png",
        },
        {
          src: "/guide/updevs-db.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/guide/updevs-db.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  },
 
    configureWebpack: {
      resolve: {
        alias: {
          '@': '../',
        },
      },
    }
})
