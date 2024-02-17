<script lang="ts" setup>
  const props = defineProps<{ courses: any[] }>()
  const emits = defineEmits(["change"])

  const { items, select, selected } = useSelectable(props.courses, {
    multiple: true,
    initial: (item) => {
      return ["The first one", "The second one"].includes(item.title)
    }
  })

  watch(items, () => emits("change", selected))
</script>

<template>
  <UiBlock>
    <div v-if="false" grid="~ cols-1 gap-4 md:(cols-2 gap-7)">
      <div v-for="n in 5" class="flex items-center space-x-4">
        <UiSkeleton class="size-8 rounded-full" />
        <div class="flex-1 space-y-2">
          <UiSkeleton class="h-3 w-[70%]" />
          <UiSkeleton class="h-3 w-[50%]" />
        </div>
      </div>
    </div>

    <!-- <UiEmptyPlaceholder v-else-if="!courses.length" /> -->

    <UiList v-else grid="~ cols-1 gap-4 md:(cols-2 gap-7)">
      <template v-for="course in items">
        <UiListItem
          @click="select(course.id)"
          class="items-start p-5 rounded-md transition"
          to="#"
        >
          <div
            size="6"
            :class="
              course.isSelected
                ? 'i-mingcute-check-circle-fill'
                : 'i-tabler-circle'
            "
          />
          <UiListContent space-y="2">
            <UiListTitle :title="course.data.title" />
            <UiListSubtitle :subtitle="course.data.info" />
          </UiListContent>
        </UiListItem>
      </template>
    </UiList>
  </UiBlock>
</template>
