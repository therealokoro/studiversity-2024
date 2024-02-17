<script lang="ts" setup>
  defineProps<{
    badge?: string
    badgeColor: "primary" | "red" | "green" | "yellow" | "blue"
    name?: string
    subParagraph?: string
  }>()
</script>

<template>
  <div w="full" flex="horizontal">
    <div flex="~ col gap-2">
      <div flex="~ items-center gap-2">
        <!-- Title -->
        <h1 text="md:xl/5" font="extrabold" flex="~ items-center wrap">
          <span>Hello,</span>
          <span>{{ name }}</span>
        </h1>
        <UiBadge v-if="badge" :text="badge" :color="badgeColor" />
      </div>
      <!-- Sub Title -->
      <p text="xxs/4 md:xs content-mute" font="medium">
        {{ subParagraph }}
      </p>
    </div>

    <slot name="extra" />
  </div>
</template>
