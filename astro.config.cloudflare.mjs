import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Cloudflare adapter
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://boltsite-by-cor-inc.pages.dev",
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en", "zh", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});