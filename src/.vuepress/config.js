const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Rapport de stage',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  // theme: 'book',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    smoothScroll: true,
    nav: [
      {
        text: 'Accueil',
        link: '/',
      },
      {
        text: 'Présentation',
        link: '/presentation/'
      },
      {
        text: 'Les missions',
        ariaLabel: 'Missions menu',
        items: [
          { text: 'Site internet de l\'équipe', link: '/mission/website/' },
          { text: 'Photographie', link: '/mission/photography/' }
        ]
      },
      {
        text: 'Annexes',
        link: '/annexes/'
      },
      {
        text: 'Remerciements',
        link: '/remerciements/'
      },
      {
        text: 'Lien vers le projet',
        link: 'https://ecstatic-hodgkin.40-66-42-88.plesk.page/'
      }
    ],
    sidebar: {
      '/mission/website/': [
        {
          collapsable: false,
          children: [
            '',
            'publications',
            'theme-plugins'
          ]
        }
      ],
      '/mission/photography/': [
        {
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
