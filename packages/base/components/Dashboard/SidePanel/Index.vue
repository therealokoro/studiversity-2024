<script lang="ts" setup>
const { isExpanded } = useSidePanel()
defineProps<{ menuLinks: NavLink[] }>()
</script>

<template>
  <aside
    w="auto"
    p="x-4"
    h="full"
    flex="~ col"
    justify="between"
    items="center"
    border="r-2 base-border"
  >
    <!-- Logo -->
    <AppLogo />

    <!-- Navigation -->
    <DashboardSidePanelNav :links="menuLinks" />

    <!-- Theme Toggler -->
    <DashboardThemeToggle :show-label="isExpanded" />
  </aside>
</template>
