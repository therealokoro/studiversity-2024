// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./client",
  serverDir: "./server",
  devtools: { enabled: true },
  extends: ["@studiversity/base"],
  modules: ["@nuxt/devtools"],

  runtimeConfig: {
    public: {
      apiBase: "" // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  }
})
