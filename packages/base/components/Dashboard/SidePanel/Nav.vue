<script lang="ts" setup>
  const { isExpanded } = useSidePanel()
  defineProps<{ links: NavLink[] }>()
</script>

<template>
  <ul w="full" flex="~ col gap-4" justify="center">
    <li v-for="item in links">
      <nuxt-link
        :to="item.link"
        flex="~ gap-1"
        items="center"
        p="0.5"
        rounded="md"
        hover="bg-base-mute"
        class="focus:accent-outline"
        :c="item.isActive ? 'accent' : ''"
      >
        <div w="10" h="10" flex="center">
          <div :class="item.isActive ? item.icon.active : item.icon.default" />
        </div>

        <span v-if="isExpanded" pr="13" text="xs" font="semibold">
          {{ item.label }}
        </span>
      </nuxt-link>
    </li>
  </ul>
</template>
