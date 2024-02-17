<script lang="ts" setup>
  // import type { IInstitute } from "types/institute"
  // import { ColorTypes } from "utils/ui"
  // const { institute } = defineProps<{ institute: IInstitute }>()

  const institute = {
    name: "Federal University, Birnin Kebbi",
    shortname: "FUBK",
    type: "University",
    logoUrl: "/fubk.png"
  }

  const badgeColor = computed(() => {
    if (institute.type == "University") return "green"
    else if (institute.type == "Polytechnic") return "yellow"
    else if (institute.type == "College") return "blue"
    else return "red"
  })
</script>

<template>
  <div flex="~ items-start gap-5">
    <!-- Institute Image/Icon -->
    <div flex-shrink="0">
      <div v-if="institute.logoUrl" class="aspect-square size-20">
        <NuxtImg
          :src="institute.logoUrl"
          class="object-cover"
          :alt="`${institute.name}'s Logo'`"
        />
      </div>

      <div v-else class="i-mingcute-building-3-line" text="2xl md:4xl" />
    </div>

    <!-- Institute Name/Meta -->
    <div space="y-1">
      <!-- Name -->
      <div flex="~ gap-2" items="center">
        <!-- Institute Name -->
        <h1 class="main-heading" lt-md="line-clamp-1">
          {{ institute.name }}
        </h1>

        <!-- Institute Type Badge -->
        <ui-badge lt-md:hidden :color="badgeColor" :text="institute.type" />
      </div>

      <!-- Sub Meta -->
      <p text="xxs/4 md:xs content-100" font="medium">
        Registered,
        <!-- {{ useDateFormat(institute.createdAt, "MMMM D, YYYY").value }} -->
      </p>
    </div>
  </div>
</template>
