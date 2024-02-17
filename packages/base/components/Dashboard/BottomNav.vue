<script lang="ts" setup>
  defineProps<{ menuLinks: NavLink[] }>()
</script>

<template>
  <ul
    absolute
    w="max"
    bottom="3"
    mx="auto"
    inset-x="0"
    flex="1 ~ gap-7"
    justify="center lt-sm:around"
    p="2 x5"
    bg="base dark:base-mute"
    bordered
    dark="border-3 base"
    rounded="full"
    shadow="md"
  >
    <li v-for="item in menuLinks">
      <nuxt-link
        :to="item.link"
        flex="~ col gap-1 center"
        rounded="md"
        hover:bg="base-mute dark:base"
        class="focus:accent-outline transition"
        :class="item.isActive ? 'c-accent' : ''"
      >
        <div p="2" flex="center">
          <div
            text="xl"
            :class="item.isActive ? item.icon.active : item.icon.default"
          />
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
  .active {
    --at-apply: "bg-accent c-white dark:(bg-base-200 c-content bordered)";
  }
</style>
