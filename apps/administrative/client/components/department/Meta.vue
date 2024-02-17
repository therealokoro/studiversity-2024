<script lang="ts" setup>
  // import type { IDepartment } from "types/department"
  // import { ColorTypes } from "utils/ui"
  // const { department } = defineProps<{ department: IDepartment }>()

  const department = {
    name: "Department of Science",
    faculty: { name: "Faculty of Science" },
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
    <!-- Department Icon -->
    <div :class="ICONS.department" text="2xl md:4xl" />

    <!-- Department Name/Meta -->
    <div space="y-1">
      <!-- Department Name -->
      <h1 class="main-heading" lt-md="line-clamp-1">
        {{ department.name }}
      </h1>

      <!-- Sub Meta -->
      <p text="xxs/4 md:xs content-100" font="medium">
        {{ department.faculty.name + " | " + department.institute.name }}
      </p>
    </div>
  </div>
</template>
