<script lang="ts" setup>
  defineProps<{
    heading?: string
    icon?: string
    data?: { icon?: string; value: string; label: string }[]
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
      <!-- <slot name="default" /> -->
      <div flex="center">
        <UiList class="py-0 grid grid-cols-1 md:grid-cols-2 grid-gap-7">
          <template v-for="n in data">
            <UiListItem class="items-start p-0">
              <div flex-shrink="0" size="5" mt="0.5" :class="n.icon" />
              <UiListContent>
                <UiListTitle class="lt-md:text-xs" :title="n.value" />
                <UiListSubtitle :subtitle="n.label" />
              </UiListContent>
            </UiListItem>
          </template>
        </UiList>

        <!-- <UiList class="py-0 space-y-7">
            <template v-for="n in accInfo">
              <UiListItem class="items-start p-0">
                <div flex-shrink="0" mt="0.5" size="5" :class="n.icon" />
                <UiListContent>
                  <UiListTitle class="lt-md:text-xs" :title="n.value" />
                  <UiListSubtitle :subtitle="n.label" />
                </UiListContent>
              </UiListItem>
            </template>
          </UiList> -->
      </div>
    </div>
  </div>
</template>
