import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://boltsite-by-cor-inc.pages.dev",
  integrations: [tailwind()],
  output: "static",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en", "zh", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
