
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
    'index.csr.html': {size: 732, hash: '82ef5ecd7db0babeae9a0bb7e397cded9fd24ac51870374be0f61184196e34c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '53b46855ff67710c8eb84c53bf27c1ac01a4c225bc577b16ae490c1b827c05b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7715, hash: '6ee618e140213ef164c55c6c7ac52fb2beede12a921eb522e96a99aa34351c04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 7607, hash: '8e8c590d47de00d71b4ea0b99a96f49937f4d6f08f0b73a1e9e6e3ba9c06ed94', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11609, hash: '6c55fb692d30ea7351cff2d41c265235fa856cb686717e67de00d27ea3e9ec34', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projets/index.html': {size: 10105, hash: '7235287fdd1643a40d7169686f7daed67e7d428475dc39cb61ce010255d9404b', text: () => import('./assets-chunks/projets_index_html.mjs').then(m => m.default)},
    'styles-HA6VLRVR.css': {size: 2926, hash: 'LxdTET4zXFo', text: () => import('./assets-chunks/styles-HA6VLRVR_css.mjs').then(m => m.default)}
  },
};
