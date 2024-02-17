<script lang="ts" setup>
  defineProps<{
    title: string
    description?: string
    width?: string
    size?: "normal" | "large"
  }>()
  const isOpen = defineModel<boolean>({ default: false, required: true })
</script>

<template>
  <UiDialog v-model:open="isOpen">
    <UiDialogContent
      :size="size"
      :class="width"
      :title="title"
      :description="description"
    >
      <template #content>
        <slot name="default" />
      </template>

      <template v-if="$slots.footer" #footer>
        <UiDialogFooter class="sm:justify-start">
          <slot name="footer" />
        </UiDialogFooter>
      </template>
    </UiDialogContent>
  </UiDialog>
</template>
