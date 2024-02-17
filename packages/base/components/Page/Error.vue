<script lang="ts" setup>
import { H3Error } from "h3"
import type { PageState } from "types/app"

const { error } = defineProps<{
  error?: PageState["error"]
}>()

// compute error info
const errInfo = computed(() => {
  if (error) {
    const message =
      error instanceof H3Error ? error.statusMessage : error.message
    const code = error instanceof H3Error ? error.statusCode : 400
    return { message, code }
  } else {
    return null
  }
})
</script>

<template>
  <div w="full" h="50vh" flex="col-center gap-3">
    <div flex="col center gap-2">
      <!-- error code -->
      <h1 text="4xl lg:7xl" font="extrabold">{{ errInfo?.code }}</h1>
      <!-- error details -->
      <div text="center md:left">
        <h3 text="sm md:lg accent-200" font="medium">
          Oops!! Looks like there's been an error
        </h3>
        <h3 text="sm">{{ errInfo?.message }}</h3>
      </div>
    </div>
    
    <!-- actions -->
    <div space="x-4">
      <ui-button @click="navigateTo('/')" type="primary">Go Home</ui-button>
      <ui-button @click="$router.back()">Go to Previous Page</ui-button>
    </div>
  </div>
</template>
