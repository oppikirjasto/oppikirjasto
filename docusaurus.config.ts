import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '📚 Oppikirjasto',
  tagline: 'Täältä löydät vapaat koulukirjat kaikille',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.oppikirjasto.fi',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oppikirjasto', // Usually your GitHub org/user name.
  projectName: 'oppikirjasto', // Usually your repo name.
  deploymentBranch: 'main',

  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/oppikirjasto/oppikirjasto/blob/main',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['fi']
      }
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap',
      type: 'text/css',
      rel: 'stylesheet',
    },
  ],
  themeConfig: {
    // Social card image for SEO
    image: 'img/oppikirjasto-social-card.jpg',
    metadata: [
      {name: 'description', content: 'Oppikirjasto.fi on avoin, maksuton ja kattava digitaalinen oppimateriaalikirjasto yläkoulun oppilaille Suomessa.'},
      {name: 'keywords', content: 'oppikirjasto, koulukirjat, yläkoulu, oppimateriaali, avoin, maksuton, digitaalinen, suomi'},
      {property: 'og:description', content: 'Oppikirjasto.fi on avoin, maksuton ja kattava digitaalinen oppimateriaalikirjasto yläkoulun oppilaille Suomessa.'},
      {name: 'twitter:description', content: 'Oppikirjasto.fi on avoin, maksuton ja kattava digitaalinen oppimateriaalikirjasto yläkoulun oppilaille Suomessa.'},
    ],
    navbar: {
      title: 'Oppikirjasto',
      logo: {
        alt: 'Oppikirjasto Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Yläkoulu',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'sidebar7',
              label: '7. luokka',
            },
            {
              type: 'docSidebar',
              sidebarId: 'sidebar8',
              label: '8. luokka',
            },
            {
              type: 'docSidebar',
              sidebarId: 'sidebar9',
              label: '9. luokka',
            },
          ],
        },
        {
          href: '/osallistu',
          label: 'Osallistu',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Etusivulle',
          to: '/',
        },
        {
          label: 'Kirjoihin',
          to: '/docs/9/aidinkieli/suomen',
        },
        {
          label: 'Osallistu',
          href: 'https://github.com/oppikirjasto/oppikirjasto',
        },
        {
          label: 'Tietoa meistä',
          to: '/tietoa',
        },
      ],
      copyright: `Sisältö on käytettävissä MIT-lisenssillä, ellei toisin ole mainittu.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
