<script lang="ts" setup>
  const {
    message = "Looks like there are no data to display yet!",
    icon = true
  } = defineProps<{ message?: string; icon?: boolean; compact?: boolean }>()
</script>

<template>
  <div
    w="full"
    flex="~ col center gap-3"
    rounded="md"
    :p="compact ? '5' : '10'"
    text="content-mute center"
  >
    <div
      v-if="icon"
      class="i-tabler-info-hexagon"
      :text="compact ? 'xl 2xl' : '3xl md:4xl'"
    />
    <h3 :text="compact ? 'xxs md:xs' : 'xs md:sm'" leading="5" font="semibold">
      {{ message }}
    </h3>
  </div>
</template>
