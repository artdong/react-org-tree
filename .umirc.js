import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  hash: true,
  favicon:
    'https://raw.githubusercontent.com/artdong/react-org-tree/f9c418ef7b904c83c1aba36cfc3aabbb9b3da10f/img/logo.svg',
  logo:
    'https://raw.githubusercontent.com/artdong/react-org-tree/f9c418ef7b904c83c1aba36cfc3aabbb9b3da10f/img/logo.svg',
  outputPath: 'docs-dist',
  base: 'react-org-tree',
  publicPath: '/react-org-tree/',
  resolve: {
    includes: ['docs'],
    previewLangs: [],
  },
  locales: [
    ['en', 'English'],
    ['zh', '中文'],
  ],
  navs: {
    en: [
      null,
      { title: 'GitHub', path: 'https://github.com/artdong/react-org-tree' },
    ],
    zh: [
      null,
      { title: 'GitHub', path: 'https://github.com/artdong/react-org-tree' },
    ],
  },
  metas: [
    {
      name: 'keywords',
      content:
        'react, react-org-tree, react-components, javascript',
    },
  ],
  exportStatic: {},
  // theme: {
  //   '@c-primary': '#6451AB',
  // },
});
