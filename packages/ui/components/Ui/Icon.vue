<script setup lang="ts">
const { plain = false } = defineProps<{
  icon: string
  isButton?: boolean
  plain?: boolean
}>()
  
const baseStyle = computed(() => {
  const raised = plain ? "" : "bg-base-200 bordered"
  const common =
    "font-bold rounded-md w-8 h-8 md:(w-9 h-9) text-(center lg) flex-center"
  return common + " " + raised
})
</script>

<template>
  <!-- render button if is button -->
  <button v-if="isButton" :class="[baseStyle, 'focus:accent-outline hover:bg-base-300']">
    <div :class="icon" />
  </button>

  <!-- else just render div as wrapper -->
  <div v-else :class="baseStyle">
    <div :class="icon" />
  </div>
</template>
