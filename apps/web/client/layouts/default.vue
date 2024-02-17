<script lang="ts" setup>
const links = useUserNavLinks("Lecturer")
</script>

<template>
  <div
    class="relative"
    w="screen"
    h="100dvh"
    p="y-2 md:y-5"
    flex="~"
    bg="base-200"
    overflow="hidden"
  >
    <!-- Side Panel - The Side Panel is hidden once the screen is smaller than the lg breakpoint  -->
    <DashboardSidePanel :menu-links="links" lt-lg="hidden" />

    <!-- Rest of the page -->
    <div flex="1">
      <!-- App Top Bar -->
      <DashboardTopBar />

      <!-- Main Page Content -->
      <div class="body-content">
        <UiContainer py="10" md:py="15" lt-md="pb-20" overflow="y-auto x-hidden">
          <slot />
        </UiContainer>
      </div>
    </div>

    <!-- For Mobile View Only -->
    <LazyDashboardBottomNav lg="hidden" />
  </div>
</template>

<style scoped>
  .body-content {
    --at-apply: "w-full h-[calc(100%_-_var(--dashboardTopBarHeight))] overflow-y-auto";
  }
</style>
