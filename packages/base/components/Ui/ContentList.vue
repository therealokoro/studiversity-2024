<script lang="ts" setup>
  const { cols = "2" } = defineProps<{
    icon: string
    cols: "2" | "3"
    items: {
      title: string
      subTitle: string
      link: string
      badge?: string
      icon?: string
      img?: string
    }[]
    loading?: boolean
    message?: string
  }>()

  const gridCols = computed(() =>
    cols == "2"
      ? "grid grid-cols-1 md:grid-cols-2"
      : "grid grid-cols-1 md:grid-cols-3"
  )
</script>

<template>
  <UiBlock>
    <div v-if="loading" :class="gridCols" gap="4 md:10">
      <div v-for="n in 5" class="flex items-center space-x-4">
        <UiSkeleton class="size-8 rounded-full" />
        <div class="flex-1 space-y-2">
          <UiSkeleton class="h-3 w-[70%]" />
          <UiSkeleton class="h-3 w-[50%]" />
        </div>
      </div>
    </div>

    <UiEmptyPlaceholder v-else-if="!items.length" :message="message" />

    <UiList v-else :class="gridCols" gap="4 md:7">
      <template v-for="i in items">
        <UiListItem
          bordered
          class="relative items-center p-5 rounded-md transition"
          :to="i.link"
        >
          <!-- Render Badge -->
          <UiBadge
            absolute
            top="4px"
            left="4px"
            v-if="i.badge"
            :text="i.badge"
            color="green"
            size="sm"
          />

          <!-- Render icon(individual or group) or image -->
          <UiAvatar v-if="i.img" :src="i.img" class="w-10 h-10" />
          <div v-else flex-shrink="0" size="6 md:8" :class="i.icon ?? icon" />

          <!-- Render Content -->
          <UiListContent>
            <UiListTitle line-clamp="1" :title="i.title" />
            <UiListSubtitle
              class="mt-1"
              v-if="i.subTitle"
              :subtitle="i.subTitle"
            />
          </UiListContent>
        </UiListItem>
      </template>
    </UiList>
  </UiBlock>
</template>
