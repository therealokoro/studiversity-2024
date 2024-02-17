import { presetStudiversity } from "@studiversity/unocss"
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetStudiversity()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  content: {
    pipeline: {
      exclude: [
        /\.(css|postcss|sass|scss|less|stylus|styl)($|\?)/,
        "./packages/ui/components/ui/**/.vue",
        "**/node_modules/**"
      ]
    }
  }
})
