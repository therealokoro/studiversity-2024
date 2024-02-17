<script lang="ts" setup>
  const { link = "/" } = defineProps<{ link?: string }>();
  const { isExpanded } = useSidePanel()
</script>

<template>
  <nuxt-link :to="link" p="1" rounded="md" focus-accent-outline>
    <AppLogoFull w="35" v-if="isExpanded" />
    <AppLogoFavicon w="6.5" v-else />
  </nuxt-link>
</template>
