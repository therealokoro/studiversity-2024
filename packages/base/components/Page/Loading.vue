<script lang="ts" setup></script>

<template>
  <div w="full" h="50vh" flex="center gap">
    <div flex="~ col gap-3" items="center">
      <!-- Logo -->
      <AppLogoFavicon w="9" class="float" />

      <!-- Text -->
      <div flex="~ gap-2" items="center">
        <h3 text="sm" font="semibold">Loading, Please Wait...</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.float {
  animation: float 1.5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-5px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
