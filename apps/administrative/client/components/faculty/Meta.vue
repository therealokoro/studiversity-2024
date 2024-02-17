<script lang="ts" setup>
  // import type { IFaculty } from "types/faculty"
  // import { ColorTypes } from "utils/ui"
  // const { faculty } = defineProps<{ faculty: IFaculty }>()

  const faculty = {
    name: "Faculty of Science",
    institute: {
      name: "Federal University, Birnin Kebbi",
      shortname: "FUBK",
      type: "University",
      logoUrl: "/fubk.png"
    }
  }
</script>

<template>
  <div flex="~ items-start gap-5">
    <!-- Faculty Icon -->
    <div :class="ICONS.faculty" text="2xl md:4xl" />

    <!-- Faculty Name/Meta -->
    <div space="y-1">
      <!-- Faculty Name -->
      <h1 class="main-heading" lt-md="line-clamp-1">
        {{ faculty.name }}
      </h1>

      <!-- Sub Meta -->
      <p text="xxs/4 md:xs content-100" font="medium">
        {{ faculty.institute.name }}
      </p>
    </div>
  </div>
</template>
