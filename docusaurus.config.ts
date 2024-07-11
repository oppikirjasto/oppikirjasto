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
  url: 'https://your-docusaurus-site.example.com',
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
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Oppikirjasto',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar1',
          position: 'left',
          label: '1',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar2',
          position: 'left',
          label: '2',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar3',
          position: 'left',
          label: '3',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar4',
          position: 'left',
          label: '4',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar5',
          position: 'left',
          label: '5',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar6',
          position: 'left',
          label: '6',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar7',
          position: 'left',
          label: '7',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar8',
          position: 'left',
          label: '8',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar9',
          position: 'left',
          label: '9',
        },
        {
          href: 'https://github.com/oppikirjasto/oppikirjasto',
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
