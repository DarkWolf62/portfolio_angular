
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
    'index.csr.html': {size: 732, hash: '9fe28c4556896a3a8e119e9b2526055e28dbe11d88e18b340a79e8b84c3827e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'f1d3fcdd91a40bf827c8654da8cea43cb53c7b1f3925e561615de03c17221593', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 21008, hash: '2f798f17c7e2f74965fa8f8fd1d65c5693c7806804cad64631bb6c33eeeb8812', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7543, hash: '7b23bb599af531c5cd5d7ae4e3e0e0ecbb696839b1b5c62483d8f31b04304f12', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19650, hash: '746a1c90055b53c395592d8bc4b9f35b46b9ed04c9c44551c4731e875200999c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7717, hash: 'eb431bc08c16dce87dafa62730a7e8722aa75f18bb9a1d4cd0329a7c93ba4c44', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HA6VLRVR.css': {size: 2926, hash: 'LxdTET4zXFo', text: () => import('./assets-chunks/styles-HA6VLRVR_css.mjs').then(m => m.default)}
  },
};
