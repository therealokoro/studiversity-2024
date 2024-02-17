export default defineNuxtConfig({
  modules: [
    "notivue/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@morev/vue-transitions/nuxt",
  ],

  typescript: { shim: false },
  tailwindcss: { exposeConfig: true, injectPosition: "last" },
  colorMode: { classSuffix: "" },
  css: ["notivue/notifications.css", "notivue/animations.css"],

  notivue: {
    enqueue: true,
    pauseOnHover: true,
    pauseOnTabChange: true,
    position: "top-right",
    teleportTo: "body",
  },

  imports: {
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
    ],
  },
});