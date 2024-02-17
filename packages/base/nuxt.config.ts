// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit"
const { resolve: r } = createResolver(import.meta.url)

const meta = {
  url: "http://localhost:3000",
  name: "Studiversity",
  description: "A study helper for versity students"
}

export default defineNuxtConfig({
  extends: ["@studiversity/ui"],
  css: ["@unocss/reset/tailwind-compat.css", r("./assets/styles/app.css")],

  alias: {
    "~/ui": r("@studiversity/ui"),
    "~/base": r("./")
  },

  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/fontaine",
    "@pinia/nuxt",
    "@nuxt/image"
  ],

  app: {
    head: {
      charset: "utf-8",
      htmlAttrs: { lang: "en" },
      templateParams: { separator: "|" },
      titleTemplate: `%s %separator ${meta.name}`,
      meta: [
        {
          name: "description",
          content: meta.description
        }
      ],
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }]
    },
    pageTransition: { name: "page", mode: "out-in" }
  },

  vue: { propsDestructure: true },
  experimental: { typedPages: true },

  // THIRD PARTY
  formkit: { autoImport: true, configFile: "./formkit.config.ts" },
  tailwindcss: { cssPath: "../../packages/ui/assets/css/tailwind.css" },
  fontMetrics: { fonts: ["Inter"] }
})