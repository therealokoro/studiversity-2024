<script lang="ts" setup>
  type SelectOption = {
    label: string
    value: string
    disabled: boolean
    id: number
  }
  const props = defineProps({ context: Object })
  const ctx = props.context!
  const attrs = computed(() => ctx?.attrs)
  const handleBlur = (e: any) => ctx.handlers.blur(e.target.value)
  const handleSelect = (val: any) => (selected.value = findOption(val))

  // Resolve options to be rendered
  const options = computed(() => {
    return [...ctx.options].map((option, i) => {
      return typeof option == "string"
        ? { label: option, value: option, id: i, disabled: false }
        : { label: option.label, value: option.value, id: i }
    }) as SelectOption[]
  })

  function findOption(value: string) {
    return options.value.find((o) => o.value == value) || null
  }

  // get initial value from v-model
  const initialOption = computed(() => findOption(ctx._value))

  // Hold raw selected option data
  const selected = ref<SelectOption | null>(initialOption.value)
  const vModel = computed(() => (selected.value ? selected.value.value : ""))

  // Handle File Selected
  watch(selected, (opt) => {
    ctx.node.input(opt!.value)
  })
</script>

<template>
  <div class="flex justify-center">
    <UiSelect
      v-model="ctx._value"
      :disabled="ctx.disabled"
      :readonly="attrs.readonly"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      @update:modelValue="handleSelect"
      @blur="handleBlur"
      :style="attrs.style"
    >
      <UiSelectTrigger>
        <UiSelectValue :placeholder="ctx.placeholder" aria-label="value">
          <span text="content">{{ selected?.label }}</span>
        </UiSelectValue>
      </UiSelectTrigger>

      <UiSelectContent>
        <UiSelectItem
          v-for="i in options"
          :key="i.id"
          :id="i.id"
          :value="i.value"
          :text="i.label"
        />
      </UiSelectContent>
    </UiSelect>
  </div>
</template>
