import { definePreset } from "unocss"
import type { Theme } from "@unocss/preset-uno"

export const presetStudiversity = () => {
  return definePreset<Theme>({
    name: "@studiversity/unocss",
    shortcuts: {
      "accent-outline":
        "!outline-0 ring-3 ring-accent ring-offset-1 !dark:outline-0",
      "flex-center": "flex justify-center items-center",
      "flex-horizontal": "flex justify-between items-center",
      "flex-vertical": "flex flex-col justify-between",
      "glass-blur":
        "bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60",
      bordered: "border-2.5 !border-base-border",
      "main-heading": "text-lg lg:text-xl font-extrabold"
    },
    theme: {
      colors: {
        accent: {
          DEFAULT: "hsl(var(--primary))",
          text: "hsl(var(--primary-foreground))"
        },
        base: {
          DEFAULT: "hsl(var(--background))",
          mute: "hsl(var(--muted))",
          border: "hsl(var(--border))"
        },
        content: {
          DEFAULT: "hsl(var(--foreground))",
          mute: "hsl(var(--muted-foreground))"
        }
      },
      fontFamily: {
        main: "Inter Variable, sans-serif"
      },
      fontSize: {
        xxs: "0.69rem",
        tiny: "0.58rem"
      }
    }
  })
}
