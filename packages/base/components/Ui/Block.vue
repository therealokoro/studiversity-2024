<script lang="ts" setup>
  const { outlined = false } = defineProps<{
    heading?: string | boolean
    description?: string
    icon?: string
    outlined?: boolean
  }>()

  const borderedClass = computed(() =>
    outlined ? "bordered p-4 rounded-md" : ""
  )
</script>

<template>
  <div w="auto" flex="~ col" :class="outlined ? 'gap-1' : 'gap-4'">
    <!-- if heading is provided -->
    <div v-if="heading" w="full" flex="~ wrap horizontal gap-3" mb="5">
      <div flex="~ gap-2 md:gap-3" items="center">
        <!-- Icon -->
        <slot name="icon">
          <div v-if="typeof heading == 'string' && icon" :class="icon" />
        </slot>
        <!-- Actual Heading Text -->

        <slot name="heading">
          <div v-if="typeof heading == 'string'" space="y-2">
            <h3 font="bold" text="xs md:sm">{{ heading }}</h3>
            <p text="xs content-mute" font="medium" v-if="description">
              {{ description }}
            </p>
          </div>
        </slot>
      </div>

      <slot name="extra" />
    </div>

    <div :class="borderedClass">
      <slot name="default" />
    </div>
  </div>
</template>
