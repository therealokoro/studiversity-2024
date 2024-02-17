<script lang="ts" setup>
  import type { StatCardInfo } from "~/base/utils/ui"

  type StatCardInfoWithLink = StatCardInfo & {
    link: string
  }

  const { stats } = defineProps<{ stats: StatCardInfoWithLink[] }>()

  const renderStats = computed(() => {
    return stats.map((stat) => ({
      ...getStatCardSettings(stat.id),
      ...(stat.label && { label: stat.label }),
      value: stat.value,
      link: stat.link,
      id: stat.id
    }))
  })
</script>

<template>
  <div class="grid gap-4 grid-cols-2 lg:grid-cols-4">
    <nuxt-link v-for="s in renderStats" :to="s.link">
      <UiCard :class="[s.color.bg, s.color.border]">
        <UiCardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <UiCardTitle class="text-xs font-medium"> {{ s.label }} </UiCardTitle>
          <div :class="s.icon" class="size-6" />
        </UiCardHeader>
        <UiCardContent>
          <div class="text-xl font-bold">
            {{ s.id == "wallet" ? `₦${s.value}` : s.value }}
          </div>
        </UiCardContent>
      </UiCard>
    </nuxt-link>
  </div>
</template>
