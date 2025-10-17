
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio_angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio_angular"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/projets"
  },
  {
    "renderMode": 2,
    "route": "/portfolio_angular/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 732, hash: '87567ab03c1d7ac9a147d81a2b0a550f6b6129d468256c4fd106372b714bb6be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '8550270a6f0fb657486ed132de6579401c3072006c5df2f885fea1a288ca6523', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 10105, hash: '2b38ad00271e07a2fdc3ca3f5ab9675f66d1cbff689f26aeac70610e7ae3145f', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7715, hash: '0ff9eb5f08698a595a71d0e2223ec35080f51976a18eaa3e9ea524652fa6cca3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7614, hash: '31137282fc78811b798cba9373438db76b8a5e70fb54e78bfeb1365f341a5bd7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11609, hash: 'ff7bb421d4efc8264f3c7344233612493f523c026a0142f60fc666819293ac1c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-HA6VLRVR.css': {size: 2926, hash: 'LxdTET4zXFo', text: () => import('./assets-chunks/styles-HA6VLRVR_css.mjs').then(m => m.default)}
  },
};
