import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  hash: true,
  ssr: {},
  favicon:
    'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  logo:
    'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
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
