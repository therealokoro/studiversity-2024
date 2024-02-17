<script lang="ts" setup>
  const { isLoading } = useLoadingIndicator()
</script>

<template>
  <TransitionFade>
    <div
      v-if="isLoading"
      z="999999"
      pointer-event="none"
      fixed
      inset="0"
      flex="center"
      bg="gray-800/80"
    >
      <AppLogoFavicon w="25" animate="~ pulse" />
    </div>
  </TransitionFade>
</template>
