
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
    'index.csr.html': {size: 779, hash: '7bfaf67a10e3452a97e2747f731cb22166cf943cbba3776e85496b93b66f4d4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'f9389b521fc11349e073ef28473f157dc238c5635d0df3112300ab5a4fcb7d13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9157, hash: '440338deb4ce4b09458c49a0eb22cb53e9dbc37c944418f469a5b7fc104ad74c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8583, hash: '4016fca8c01a1f26e11a776e742cea0ec2bf2de2ec0054fd6fbcd10899a19e75', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 11813, hash: 'e03e5a2482a28b363cd287e730ce3156179837c1f994f86ffd16a44d404de600', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 13437, hash: '6687008723c5fda2bce6fff85c63f64f3c2e1745c8ff88323f29a8df74c41c86', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-XELF4GWS.css': {size: 4083, hash: 'IUXZlmL729Y', text: () => import('./assets-chunks/styles-XELF4GWS_css.mjs').then(m => m.default)}
  },
};
