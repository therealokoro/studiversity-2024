<script lang="ts" setup>
  const { showLabel = true } = defineProps<{ showLabel?: boolean }>()
  const { isDark, toggleColorMode } = useDarkMode()
  const label = computed(() => (isDark.value ? "Dark Mode" : "Light Mode"))
  const icon = computed(() =>
    isDark.value ? "i-mingcute-moon-line" : "i-mingcute-sun-line"
  )
</script>

<template>
  <ClientOnly>
    <button
      flex="~ gap-2"
      items="center"
      p="0.5"
      rounded="md"
      bg="base-mute hover:base"
      border="2 base-border"
      class="focus:accent-outline"
      @click="toggleColorMode()"
    >
      <div size="9" bg="base" rounded="md" flex="center">
        <div :class="icon" />
      </div>
      <p v-if="showLabel" pr="10" text="xs" font="medium">{{ label }}</p>
    </button>
  </ClientOnly>
</template>
