import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://boltsite.vercel.app",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en", "zh", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
