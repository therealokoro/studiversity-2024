<script lang="ts" setup>
  defineProps<{ icon?: string; heading?: string; subHeading?: string }>()
</script>

<template>
  <div w="full" flex="~ wrap horizontal gap-3">
    <!-- Heading details -->
    <div flex="~ items-center gap-2">
      <!-- Icon -->
      <div v-if="icon || $slots.icon" flex-shrink="0">
        <slot name="icon">
          <div :class="icon" text="2xl md:4xl" />
        </slot>
      </div>

      <!-- Title -->
      <div space="y-1">
        <!-- Title -->
        <slot name="heading">
          <h1 v-if="heading" class="main-heading" lt-md="line-clamp-1">
            {{ heading }}
          </h1>
        </slot>

        <!-- Sub Title -->
        <slot name="sub-heading">
          <p v-if="subHeading" text="xxs/4 md:xs content-mute" font="medium">
            {{ subHeading }}
          </p>
        </slot>
      </div>
    </div>

    <!-- Extra Content -->
    <div flex-shrink="1">
      <slot name="extra"></slot>
    </div>
  </div>
</template>
