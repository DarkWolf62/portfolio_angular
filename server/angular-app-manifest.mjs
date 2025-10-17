
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
    'index.csr.html': {size: 779, hash: 'cac9c2024a1c8aafece720050591db3873371e9712e1d94172eb9ab5ab03aa47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'a9479ff682e870df0e4caa6b24933a2fefeb26f2eebc0a6b4dd6d00645fe675d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 13437, hash: 'bb3400e0df29ea69d39988e262e0b332e83dce4b8368cad4bfa665787d06eb1f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 10976, hash: '2fe3e10217a917f92bf829e3a3958d34848786a289d0009cfbaa212beddc9c7f', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8583, hash: '295ae1ae609206c529c43403c67cc7819d0ec80cf4e36511273276d79b617f58', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9157, hash: '545afb52dd70c83416e0691de6e8889148081d7bcd4e08f5ab95106f107cbe24', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XELF4GWS.css': {size: 4083, hash: 'IUXZlmL729Y', text: () => import('./assets-chunks/styles-XELF4GWS_css.mjs').then(m => m.default)}
  },
};
