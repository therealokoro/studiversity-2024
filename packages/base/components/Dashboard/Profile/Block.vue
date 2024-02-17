<script lang="ts" setup>
  defineProps<{
    heading?: string
    icon?: string
  }>()
</script>

<template>
  <div w="auto" flex="~ col" class="gap-1">
    <!-- if heading is provided -->
    <div v-if="heading" w="full" flex="~ wrap horizontal gap-3" mb="5">
      <div flex="~ gap-2 md:gap-3" items="center">
        <!-- Icon -->
        <slot name="icon">
          <div v-if="typeof heading == 'string' && icon" :class="icon" />
        </slot>
        <!-- Actual Heading Text -->

        <slot name="heading">
          <h3 font="bold" text="xs md:sm">{{ heading }}</h3>
        </slot>
      </div>

      <slot name="extra" />
    </div>

    <div class="bordered rounded-md" p="y4 x4 md:x6">
      <slot name="default" />
    </div>
  </div>
</template>
