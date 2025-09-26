/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_GEokU6nQ.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_Bd6toAoF.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CdTdV5Ox.mjs';
export { renderers } from '../renderers.mjs';

const priceData = [
	{
		title: "ビギナー",
		description: "個人事業主や小規模事業者に最適なプラン",
		price: 15000,
		devCount: "5ページまで",
		support: "メールサポート",
		update: "月1回更新",
		action: "プランを選択",
		link: "#contact"
	},
	{
		title: "スタンダード",
		description: "中小企業に最適なバランスの取れたプラン",
		price: 25000,
		devCount: "10ページまで",
		support: "メール・チャットサポート",
		update: "月2回更新",
		action: "プランを選択",
		link: "#contact"
	},
	{
		title: "プレミアム",
		description: "大企業や成長企業向けの高機能プラン",
		price: 30000,
		devCount: "20ページまで",
		support: "電話・メールサポート",
		update: "月4回更新",
		action: "プランを選択",
		link: "#contact"
	},
	{
		title: "エンタープライズ",
		description: "大規模企業向けのカスタムプラン",
		price: 50000,
		devCount: "無制限",
		support: "専任コンサルタント",
		update: "無制限更新",
		action: "お問い合わせ",
		link: "#contact"
	}
];

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Our Pricing" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Designed for business teams like yours</h2> <p class="mb-5 font-light text-gray-500 sm:text-xl">BoltSite by Cor.Incでは、Jamstack技術を活用したBoltSiteで、中小企業のDXを加速し、持続的な成長を実現します。</p> </div> <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> <!-- Pricing Card --> ${priceData.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col p-6 mx-auto max-w-lg text-center"> <h3 class="mb-4 text-2xl font-semibold">${item.title}</h3> <p class="font-light text-gray-500 sm:text-lg">${item.description}</p> <div class="flex justify-center items-baseline my-8"> <span class="mr-2 text-5xl font-extrabold">$${item.price}</span> <span class="text-gray-500">/month</span> </div> <!-- List --> <ul role="list" class="mb-8 space-y-4 text-left"> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Individual configuration</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>No setup, or hidden fees</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Team size: <span class="font-semibold">${item.devCount}</span></span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Premium support: <span class="font-semibold">${item.support}</span></span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Free updates: <span class="font-semibold">${item.update}</span></span> </li> </ul> <a${addAttribute(item.link, "href")} class="text-black hover:text-white bg-green hover:bg-black focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">${item.action}</a> </div> ` })}`)} </div> </div> </main> ` })}`;
}, "/Users/teradakousuke/Developer/BoltSite/src/pages/pricing.astro", void 0);

const $$file = "/Users/teradakousuke/Developer/BoltSite/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
