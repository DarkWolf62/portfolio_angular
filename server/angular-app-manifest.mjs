
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/DarkWolf62/portfolio_angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/DarkWolf62/portfolio_angular"
  },
  {
    "renderMode": 2,
    "route": "/DarkWolf62/portfolio_angular/about"
  },
  {
    "renderMode": 2,
    "route": "/DarkWolf62/portfolio_angular/projets"
  },
  {
    "renderMode": 2,
    "route": "/DarkWolf62/portfolio_angular/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 760, hash: '8b0114e83df9d25eb274a7675b65e5af9666b52c92cd09e5766dfb8de5c50655', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1052, hash: '75951db4368ecd2ed225756b0475e011619b483a1a50366b86bfb89aa94f1a51', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7687, hash: 'a9eddfab3f275bd8022e3e85f15edcb75e97f741624d31d1b4b1c40d5aa6fff7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7948, hash: '3391fcaa59e643341c2390149790390b6253e835f2f86f9400cc157be892fe79', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11682, hash: '94082770fc4866dd441f79a7059acc63101d4a9ca5c434e180e862e40c106153', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 10249, hash: 'f0f9d0922314ffc506a973a2604a3786caddc8a95481e99650523ea8e8da1cfb', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'styles-HA6VLRVR.css': {size: 2926, hash: 'LxdTET4zXFo', text: () => import('./assets-chunks/styles-HA6VLRVR_css.mjs').then(m => m.default)}
  },
};
