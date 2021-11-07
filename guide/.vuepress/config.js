const { config } = require("vuepress-theme-hope");

module.exports = config({
 title: 'Up-Devs.DB',
 description: 'An useful data-base for your projects. Helpful for storing your datas.',
 base: "/guide/",

 head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/updevs-db.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/updevs-db.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/updevs-db.png"}],
    ['link', { rel: 'icon', href: '/updevs-db.png' }],
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
          { text: "Docs", link: "https://updevs-db.js.org/docs" },
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
          {
            title: 'MongoDB',
            collapsable: false,
            children: [
              'mongoDB/start',
              'mongoDB/first',
            ]
          },
          {
            title: 'JsonDB',
            collapsable: false,
            children: [
              'jsonDB/start',
              'jsonDB/first',
            ]
          },
        ]
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
