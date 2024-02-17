import { plugin, defaultConfig, ssrComplete, createInput } from "@formkit/vue"
import { FormkitInput, FormkitUpload, FormkitSelect, FormkitMultiSelect } from "#components"
import { resetCount } from "@formkit/core"

export default defineNuxtPlugin((nuxtApp) => {
  const config = defaultConfig({
    inputs: {
      cinput: createInput(FormkitInput, {
        props: ["disabled"]
      }),
      cfile: createInput(FormkitUpload, {
        props: ["size", "accepts"]
      }),
      cselect: createInput(FormkitSelect, {
        props: ["options", "placeholder"]
      }),
      cmultiselect: createInput(FormkitMultiSelect, {
        props: ["options", "placeholder"]
      })
    }
  })

  nuxtApp.hook("app:rendered", () => {
    resetCount()
    ssrComplete(nuxtApp.vueApp)
  })

  nuxtApp.vueApp.config.compilerOptions.isCustomElement = (tag: string) =>
    tag.startsWith("FormKit")

  nuxtApp.vueApp.use(plugin, config)
})
