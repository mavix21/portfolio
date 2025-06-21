// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://marcelovizcarra.com",

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
        subsets: ["latin"],
        weights: [300, 400, 500, 600, 700],
      },
      {
        provider: fontProviders.google(),
        name: "Newsreader",
        cssVariable: "--font-newsreader",
        subsets: ["latin"],
        weights: [300, 400, 500, 600, 700],
      },
    ],
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [react()],
});
