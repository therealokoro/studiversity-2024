<template>
  <component
    :is="elementType"
    @click="onClick"
    :to="to"
    :href="href"
    :disabled="disabled"
    :class="
      badgeVariants({ disabled, variant, color, size, class: props.class })
    "
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script lang="ts" setup>
  const badgeVariants = tv({
    base: "w-max inline-flex items-center rounded-[var(--radius)] border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    variants: {
      variant: {
        default: "border-transparent",
        outline: "text-foreground"
      },
      color: {
        green: "bg-green-500 text-white",
        red: "bg-red-500 text-white",
        yellow: "bg-yellow-500 text-white",
        blue: "bg-blue-500 text-white0"
      },
      size: {
        md: "px-2 text-[0.57rem] md:px-2.5 md:py-[1px] md:text-xs",
        sm: "px-2 py-[1px] text-[0.57rem]"
      },
      disabled: {
        true: "cursor-not-allowed opacity-50"
      }
    },
    defaultVariants: {
      variant: "default",
      color: "blue",
      size: "md"
    }
  })

  type BadgeProps = VariantProps<typeof badgeVariants>

  const props = defineProps<{
    class?: any
    variant?: BadgeProps["variant"]
    onClick?: () => void
    to?: string
    href?: string
    text?: string
    color?: BadgeProps["color"]
    size?: BadgeProps["size"]
    disabled?: boolean
    tag?: string
  }>()

  const elementType = computed(() => {
    if (props.tag) return props.tag
    if (props.href || props.to) return resolveComponent("NuxtLink")
    return props.tag || "span"
  })
</script>
