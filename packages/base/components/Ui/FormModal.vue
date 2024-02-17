<script lang="ts" setup>
  const { double = false } = defineProps<{
    title: string
    description?: string
    schema: any[]
    submitLabel?: string
    double?: boolean
    width?: string
    size?: "normal" | "large"
  }>()

  const isOpen = defineModel<boolean>({ default: false, required: true })
  const emit = defineEmits(["submit"])

  const gridClass = computed(() => {
    return double ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "space-y-5"
  })
</script>

<template>
  <UiModal
    v-model="isOpen"
    :title="title"
    :description="description"
    :width="width"
    :size="size"
  >
    <FormKit
      type="form"
      @submit="$emit('submit', $event)"
      :submit-label="submitLabel"
    >
      <div w="full" :class="gridClass">
        <FormKitSchema :schema="schema" />
      </div>
    </FormKit>
  </UiModal>
</template>
