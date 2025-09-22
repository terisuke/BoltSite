/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_GEokU6nQ.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CdTdV5Ox.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_CAjBJkTf.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_XTVUQqmP.mjs';
import { g as getCollection } from '../chunks/_astro_content_BN0g4Dkl.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "BoltSite Blog | Cor.Inc" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"> <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">Our Blog</h2> <p class="font-light sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p> </div> <br> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <div class="grid gap-8 lg:grid-cols-2"> ${allBlogArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </main> ` })}`;
}, "/Users/teradakousuke/Developer/BoltSite/src/pages/articles/index.astro", void 0);

const $$file = "/Users/teradakousuke/Developer/BoltSite/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
