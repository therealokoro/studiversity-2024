<script lang="ts" setup>
  defineProps<{
    title?: string
    description?: string
    noFooter?: boolean
    isDelete?: boolean
  }>()
  const isOpen = defineModel<boolean>({ default: false, required: true })
  defineEmits(["cancel", "confirm"])
</script>

<template>
  <UiAlertDialog v-model:open="isOpen">
    <UiAlertDialogContent>
      <UiAlertDialogHeader>
        <UiAlertDialogTitle>{{ title }}</UiAlertDialogTitle>
        <UiAlertDialogDescription>
          {{ description }}
        </UiAlertDialogDescription>
      </UiAlertDialogHeader>

      <slot />

      <UiAlertDialogFooter v-if="!noFooter">
        <UiAlertDialogCancel @click="$emit('cancel')" />
        <UiAlertDialogAction
          :variant="isDelete ? 'descructive' : 'primary'"
          @click="$emit('confirm')"
        />
      </UiAlertDialogFooter>
    </UiAlertDialogContent>
  </UiAlertDialog>
</template>
