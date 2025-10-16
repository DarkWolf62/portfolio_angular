
export default {
  basePath: 'https://github.com/DarkWolf62/portfolio_angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
