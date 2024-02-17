<script lang="ts" setup>
  onMounted(() => {
    throw createError({
      statusCode: 402,
      statusMessage: "This is a custom error"
    })
  })
</script>

<template>
  <NuxtLayout>
    <AppLoader />

    <NuxtPage />
    <UiNotivue />
  </NuxtLayout>
</template>
