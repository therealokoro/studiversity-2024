<script lang="ts" setup>
  type SelectOption = {
    label: string
    value: string
    disabled: boolean
    id: number
  }

  const props = defineProps({ context: Object })
  const ctx = props.context!

  // Resolve options to be rendered
  const options = computed(() => {
    return [...ctx.options].map((option, i) => {
      return typeof option == "string"
        ? { label: option, value: option, id: i, disabled: false }
        : { label: option.label, value: option.value, id: i }
    }) as SelectOption[]
  })

  const { items, select, selected, isSelected } = useSelectable(options.value, {
    multiple: true,
    initial: (item) => {
      return ctx._value?.includes(item.value)
    }
  })

  const displaySelected = ref<string | null>(ctx._value?.join(", ") || null)
  const displayLabel = computed(() => {
    return displaySelected.value ? displaySelected.value : ctx.placeholder
  })

  // Handle File Selected
  watch(selected, (opt) => {
    const values = opt.map((curr) => curr.value)
    ctx.node.input(values)
    displaySelected.value = values.join(", ")
  })
</script>

<template>
  <div class="flex justify-center">
    <UiDropdownMenu>
      <UiDropdownMenuTrigger
        class="flex items-center justify-between h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-[13px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 line-clamp-1"
        :title="displayLabel"
      >
        <span>{{ displayLabel }}</span>
        <Icon name="lucide:chevrons-up-down" />
      </UiDropdownMenuTrigger>

      <UiDropdownMenuContent>
        <UiDropdownMenuCheckboxItem
          v-for="i in items"
          @click="select(i.id)"
          :checked="isSelected(i.data)"
          @select="(e: any) => e.preventDefault()"
        >
          <div class="flex items-center gap-4">
            <span>{{ i.data.label }}</span>
          </div>
        </UiDropdownMenuCheckboxItem>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>

<style lang="css">
  [data-radix-popper-content-wrapper] {
    width: var(--radix-popper-anchor-width) !important;
  }
</style>
