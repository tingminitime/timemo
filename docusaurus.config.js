// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
require('dotenv').config()

const organizationName = 'tingminitime'
const projectName = 'timemo'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TIMemo',
  tagline: 'The only constant in the world is change.',
  url: 'https://timemo.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tingminitime', // Usually your GitHub org/user name.
  projectName: 'timemo', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  ],

  plugins: ['docusaurus-plugin-sass', '@docusaurus/theme-live-codeblock'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          blogPostComponent:
            '@site/src/theme/CustomComponents/BlogPostPage.tsx',
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
        gtag: {
          trackingID: 'G-KG2XF7QPX7',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'og:image',
          content: require.resolve('./static/img/og-img.png'),
        },
      ],
      navbar: {
        title: 'TIMemo',
        hideOnScroll: false,
        logo: {
          alt: 'TIMemo Logo',
          src: 'img/Tim-logo.svg',
          srcDark: 'img/Tim-logo-white.svg',
          style: { margin: '0 1rem' },
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '前端筆記',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: '更多',
            position: 'left',
            items: [
              {
                to: '/docs/tags',
                label: '前端筆記標籤',
              },
              {
                to: '/blog/tags',
                label: 'Blog標籤',
              },
              {
                to: '/more/about',
                label: '關於我',
              },
              {
                to: '/support/privacy-policy',
                label: '隱私權政策',
              },
            ],
          },
          {
            href: 'https://github.com/tingminitime',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: 'timemo',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Local',
            items: [
              {
                label: '前端筆記',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tingminitime',
              },
              {
                label: 'CakeResume',
                href: 'https://www.cakeresume.com/e0610k',
              },
              {
                label: 'My resume',
                href: 'https://tingminitime.github.io/my-resume/',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: '隱私權政策',
                to: '/support/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Timemo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'error-next-line',
          },
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
}

module.exports = config
