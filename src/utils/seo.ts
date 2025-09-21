// SEO最適化のためのユーティリティ

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

/**
 * 構造化データ（JSON-LD）を生成
 */
export function generateStructuredData(data: SEOData) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.siteName || "BoltSite",
    description: data.description,
    url: data.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${data.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return JSON.stringify(structuredData);
}

/**
 * メタタグを生成
 */
export function generateMetaTags(data: SEOData) {
  const metaTags = [];

  // 基本メタタグ
  metaTags.push(`<title>${data.title}</title>`);
  metaTags.push(`<meta name="description" content="${data.description}">`);

  if (data.keywords && data.keywords.length > 0) {
    metaTags.push(
      `<meta name="keywords" content="${data.keywords.join(", ")}">`,
    );
  }

  // Open Graph タグ
  metaTags.push(`<meta property="og:title" content="${data.title}">`);
  metaTags.push(
    `<meta property="og:description" content="${data.description}">`,
  );
  metaTags.push(
    `<meta property="og:type" content="${data.type || "website"}">`,
  );

  if (data.url) {
    metaTags.push(`<meta property="og:url" content="${data.url}">`);
  }

  if (data.image) {
    metaTags.push(`<meta property="og:image" content="${data.image.url}">`);
    metaTags.push(`<meta property="og:image:alt" content="${data.image.alt}">`);
    if (data.image.width)
      metaTags.push(
        `<meta property="og:image:width" content="${data.image.width}">`,
      );
    if (data.image.height)
      metaTags.push(
        `<meta property="og:image:height" content="${data.image.height}">`,
      );
  }

  // Twitter Card タグ
  metaTags.push(`<meta name="twitter:card" content="summary_large_image">`);
  metaTags.push(`<meta name="twitter:title" content="${data.title}">`);
  metaTags.push(
    `<meta name="twitter:description" content="${data.description}">`,
  );

  if (data.image) {
    metaTags.push(`<meta name="twitter:image" content="${data.image.url}">`);
    metaTags.push(
      `<meta name="twitter:image:alt" content="${data.image.alt}">`,
    );
  }

  // その他のメタタグ
  metaTags.push(
    `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  );
  metaTags.push(`<meta charset="utf-8">`);
  metaTags.push(`<meta name="robots" content="index, follow">`);
  metaTags.push(`<meta name="author" content="BoltSite">`);

  if (data.locale) {
    metaTags.push(`<meta property="og:locale" content="${data.locale}">`);
  }

  return metaTags.join("\n");
}

/**
 * カノニカルURLを生成
 */
export function generateCanonicalUrl(url: string) {
  return `<link rel="canonical" href="${url}">`;
}

/**
 * サイトマップ用のURLリストを生成
 */
export function generateSitemapUrls(baseUrl: string) {
  const urls = [
    { url: `${baseUrl}/`, priority: 1.0, changefreq: "weekly" },
    { url: `${baseUrl}/about`, priority: 0.8, changefreq: "monthly" },
    { url: `${baseUrl}/services`, priority: 0.9, changefreq: "weekly" },
    { url: `${baseUrl}/pricing`, priority: 0.9, changefreq: "weekly" },
    { url: `${baseUrl}/articles`, priority: 0.7, changefreq: "weekly" },
  ];

  return urls;
}

/**
 * パンくずリストの構造化データを生成
 */
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>,
) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(structuredData);
}

/**
 * FAQの構造化データを生成
 */
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>,
) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return JSON.stringify(structuredData);
}

/**
 * 組織の構造化データを生成
 */
export function generateOrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BoltSite by Cor.Inc",
    description: "BoltSite",
    url: "https://cor-jp.com",
    logo: "https://cor-jp.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-070-8561-1659",
      email: "company@cor-jp.com",
      contactType: "customer service",
      availableLanguage: ["Japanese", "English"],
    },
    sameAs: [
      "https://twitter.com/cor_jp",
      "https://linkedin.com/company/cor-jp",
    ],
  };

  return JSON.stringify(structuredData);
}
