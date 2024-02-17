<script lang="ts" setup>
  type ColorTypes = "red" | "green" | "base"
  const props = defineProps<{
    title?: string
    body: string
    color?: ColorTypes
  }>()

  const colorClasses = computed(() => {
    const colors: Record<ColorTypes, string> = {
      red: "text-red-500",
      green: "text-green-500",
      base: "text-blue-500"
    }

    return props.color ? colors[props.color] : colors["base"]
  })
</script>

<template>
  <div
    role="alert"
    :data-color="color"
    max-w="full"
    flex="~ center gap-2"
    :class="colorClasses"
    rounded="md"
    bordered
    p="3"
  >
    <div flex="~ gap-2" items="center">
      <div class="icon" />
      <p text="xs md:sm">{{ body }}</p>
    </div>
  </div>
</template>

<style scoped>
  [data-color="green"] .icon {
    --uno: "c-green i-mingcute-check-circle-line";
  }

  [data-color="red"] .icon {
    --uno: "c-red i-mingcute-close-circle-line";
  }

  [data-color="base"] .icon {
    --uno: "c-blue i-mingcute-information-line";
  }
</style>
