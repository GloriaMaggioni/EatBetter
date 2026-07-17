
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5637, hash: '641ee453b0fe84e940e9c1e5e836d8f192eac49cd71a3777c9ac9a51dacbc66c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: 'c75082f4933f52c38bc809366dc4f3e495b4c52025ed78139c2a3cb0fed1a06c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18507, hash: '02c84593ba2ecf1428db947f404741b59600ffaa9e3510054109f136fdab133d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q5322NPS.css': {size: 16269, hash: 'V4iO9CmakQw', text: () => import('./assets-chunks/styles-Q5322NPS_css.mjs').then(m => m.default)}
  },
};
