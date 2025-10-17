
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
    'index.csr.html': {size: 732, hash: '382649eeba6496285f911ace46892ea798ffc4583ba3428bd1e529ff1c5b1fd3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '89f3f9ec745bf3beb86c876fdc5bec6f982000744e3336aabd72bcf40a697689', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7715, hash: '2a6f92164428f78486183fa82435a8d197978418e09704bf19c43338f453bfc6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7619, hash: '79bc47d0eafcf0ec273fd856f637a0feca7f2ab5d736f94b5f83c1164ba98e23', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 10105, hash: '171571a979a7828153ade12c0c9f1df455715d262cc89d97c53a951e0d9c08e1', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11609, hash: '803f20b4c568808e2ce2b43b08707afb674fe62278433c15069b7041e531c0ac', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-HA6VLRVR.css': {size: 2926, hash: 'LxdTET4zXFo', text: () => import('./assets-chunks/styles-HA6VLRVR_css.mjs').then(m => m.default)}
  },
};
