<script lang="ts" setup>
import type { PageState } from "~/types/app"
import { H3Error } from "h3"

const {
  title,
  loading,
  error,
  spacing = true
} = defineProps<{
  title?: string
  spacing?: boolean | string
  loading?: boolean
  error?: PageState["error"]
}>()

// resolve gap within content
const contentGap = computed(() => {
  return spacing ? (typeof spacing == "string" ? spacing : "space-y-10 md:space-y-15") : ""
})

const pageTitle = computed(() =>
  error
    ? error instanceof H3Error
      ? error.statusMessage
      : error.message
    : title
)
</script>

<template>
  <div w="full">
    <!-- Set current page title -->
    <Title>{{ pageTitle }}</Title>

    <!-- Loading State -->
    <PageLoading v-if="loading" />

    <!-- Error State -->
    <PageError v-else-if="error" :error="error" />

    <!-- Acutal Page Content -->
    <div v-else class="w-full" :class="contentGap">
      <slot />
    </div>
  </div>
</template>
