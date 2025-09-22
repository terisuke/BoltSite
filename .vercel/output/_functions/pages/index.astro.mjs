/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_GEokU6nQ.mjs';
import 'kleur/colors';
import { $ as $$BoltHero, a as $$FeatureComparison, b as $$CompetitiveAdvantage, c as $$PerformanceGuarantee, d as $$BusinessImpact, e as $$DXPackage, f as $$IntroductionFlow, g as $$FAQ, h as $$FinalCTA } from '../chunks/FinalCTA_dqE65Psp.mjs';
import { $ as $$PricingPlans } from '../chunks/PricingPlans_MzbvG1Bq.mjs';
import { $ as $$ServiceOverview } from '../chunks/ServiceOverview_DPnDp7bq.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CdTdV5Ox.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://boltsite.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "BoltSite - \u9AD8\u6027\u80FD\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u5236\u4F5C | 0.3\u79D2\u8868\u793A\u30FBSEO\u6E80\u70B9", "description": "BoltSite: Jamstack\u30670.3\u79D2\u8868\u793A\u3001SEO\u6E80\u70B9\u3002\u6708\u984D15,000\u5186~\u3067DX\u3092\u52A0\u901F\u3002" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BoltHero", $$BoltHero, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "ServiceOverview", $$ServiceOverview, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "PricingPlans", $$PricingPlans, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "FeatureComparison", $$FeatureComparison, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "CompetitiveAdvantage", $$CompetitiveAdvantage, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "PerformanceGuarantee", $$PerformanceGuarantee, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "BusinessImpact", $$BusinessImpact, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "DXPackage", $$DXPackage, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "IntroductionFlow", $$IntroductionFlow, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "FAQ", $$FAQ, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, { "currentPath": Astro2.url.pathname })} ` })}`;
}, "/Users/teradakousuke/Developer/BoltSite/src/pages/index.astro", void 0);

const $$file = "/Users/teradakousuke/Developer/BoltSite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
