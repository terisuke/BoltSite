import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CIF__oGo.mjs';
import { manifest } from './manifest_ChKijgLz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/articles/api/search.json.astro.mjs');
const _page4 = () => import('./pages/articles/search.astro.mjs');
const _page5 = () => import('./pages/articles/tag/_---tag_.astro.mjs');
const _page6 = () => import('./pages/articles.astro.mjs');
const _page7 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page8 = () => import('./pages/en/pricing.astro.mjs');
const _page9 = () => import('./pages/en/privacy.astro.mjs');
const _page10 = () => import('./pages/en/services.astro.mjs');
const _page11 = () => import('./pages/en/terms.astro.mjs');
const _page12 = () => import('./pages/en.astro.mjs');
const _page13 = () => import('./pages/es/pricing.astro.mjs');
const _page14 = () => import('./pages/es/privacy.astro.mjs');
const _page15 = () => import('./pages/es/services.astro.mjs');
const _page16 = () => import('./pages/es/terms.astro.mjs');
const _page17 = () => import('./pages/es.astro.mjs');
const _page18 = () => import('./pages/pricing.astro.mjs');
const _page19 = () => import('./pages/privacy.astro.mjs');
const _page20 = () => import('./pages/services/seo.astro.mjs');
const _page21 = () => import('./pages/services.astro.mjs');
const _page22 = () => import('./pages/sitemap.astro.mjs');
const _page23 = () => import('./pages/terms.astro.mjs');
const _page24 = () => import('./pages/zh/pricing.astro.mjs');
const _page25 = () => import('./pages/zh/privacy.astro.mjs');
const _page26 = () => import('./pages/zh/services.astro.mjs');
const _page27 = () => import('./pages/zh/terms.astro.mjs');
const _page28 = () => import('./pages/zh.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles/api/search.json.ts", _page3],
    ["src/pages/articles/search.astro", _page4],
    ["src/pages/articles/tag/[...tag].astro", _page5],
    ["src/pages/articles/index.astro", _page6],
    ["src/pages/articles/[...slug].astro", _page7],
    ["src/pages/en/pricing.astro", _page8],
    ["src/pages/en/privacy.astro", _page9],
    ["src/pages/en/services.astro", _page10],
    ["src/pages/en/terms.astro", _page11],
    ["src/pages/en/index.astro", _page12],
    ["src/pages/es/pricing.astro", _page13],
    ["src/pages/es/privacy.astro", _page14],
    ["src/pages/es/services.astro", _page15],
    ["src/pages/es/terms.astro", _page16],
    ["src/pages/es/index.astro", _page17],
    ["src/pages/pricing.astro", _page18],
    ["src/pages/privacy.astro", _page19],
    ["src/pages/services/seo.astro", _page20],
    ["src/pages/services.astro", _page21],
    ["src/pages/sitemap.astro", _page22],
    ["src/pages/terms.astro", _page23],
    ["src/pages/zh/pricing.astro", _page24],
    ["src/pages/zh/privacy.astro", _page25],
    ["src/pages/zh/services.astro", _page26],
    ["src/pages/zh/terms.astro", _page27],
    ["src/pages/zh/index.astro", _page28],
    ["src/pages/index.astro", _page29]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "253597df-4c72-46e9-b159-4c4cd200e89f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
