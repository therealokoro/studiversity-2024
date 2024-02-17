<script lang="ts" setup>
  const { toggleNavBar, isExpanded } = useSidePanel()
</script>

<template>
  <header w="full" h="$dashboardTopBarHeight" glass-blur>
    <UiContainer class="h-full flex items-center justify-between">
      <div flex="~ gap-2" items="center">
        <ui-button
          lt-lg="hidden"
          @click="toggleNavBar()"
          :icon="
            isExpanded
              ? 'i-tabler-layout-sidebar-left-collapse'
              : 'i-tabler-layout-sidebar-left-expand'
          "
        />
        <ui-button
          lt-md="hidden"
          @click="$router.back()"
          icon="i-mingcute-left-line"
        />
        <ui-button
          lt-md="hidden"
          @click="$router.forward()"
          icon="i-mingcute-right-line"
        />
      </div>

      <div flex="~ gap-2" items="center">
        <ui-button icon="i-mingcute-notification-line" />
        <ClientOnly>
          <DashboardProfileMenu />
        </ClientOnly>
      </div>
    </UiContainer>
  </header>
</template>
