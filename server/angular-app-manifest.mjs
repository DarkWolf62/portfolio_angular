
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
    'index.csr.html': {size: 779, hash: 'aefa6425cbb5874acbbe497cb4a8a452095d68caf29c8ba523743e1b1aac6a14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'a3b9fe9a2ef0643138b818ede5b9a693478149ab03f00e7e95417945e19168b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 11909, hash: '7468c4a0c751205e68d716fb416a180924978c96b28a9374c4007ad269ddc058', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9253, hash: '71c91e11669e9cea23830c308fc6f2e20af5ebb57cc0878e434b3dac0cea0c61', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8679, hash: 'fc50623c220f00d7d74e385932b6209408b52a451da901076c5a69b6377b880c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 13533, hash: 'cb268e9e18997e3447ea54ee3f6ae128facda8c1157d9819c1bd67a7cd679638', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-XELF4GWS.css': {size: 4083, hash: 'IUXZlmL729Y', text: () => import('./assets-chunks/styles-XELF4GWS_css.mjs').then(m => m.default)}
  },
};
