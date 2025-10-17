
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
    'index.csr.html': {size: 732, hash: '5aa4cea93e0b5999bbdfb4f47649c71781cc909b3e177f18db0c0dfbaf850df9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'e2b77ac4560470fe0de124685e51aa53af409c0c80c0f66fb2f66f6dba5c1d1c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 10105, hash: 'f5404a0334adaf860f3c1498fdca53526edd6116fd8f8f82a118161239fa4ae9', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7614, hash: 'fd24bab641561f9050f3b1d723d5ee255ec501d5851812a56c14bcc30dbfd091', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11609, hash: 'fc466138835a156bd210a7dab9daba8af265aa970ebd5ae95d7e7a15a97ea8c4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7717, hash: '24c66a9d0cde2e589800c1c2cc2ad3e0cbd0e56bb6056caf0c073f5258d9001e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HA6VLRVR.css': {size: 2926, hash: 'LxdTET4zXFo', text: () => import('./assets-chunks/styles-HA6VLRVR_css.mjs').then(m => m.default)}
  },
};
