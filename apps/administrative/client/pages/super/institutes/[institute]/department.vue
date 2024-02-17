<script lang="ts" setup>
  const createModal = ref(false)
  const editModal = ref(false)
  const deleteModal = ref(false)

  const courses = [
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC104",
      link: "/super/institutes/doiqwdqionqw/course?id=23edd23d"
    },
    {
      title: "Mathematics Fundamentals",
      subTitle: "MAT304",
      link: "/super/institutes/doiqwdqionqw/course?id=23edd23d"
    },
    {
      title: "Biochemistry 101",
      subTitle: "BIO104",
      link: "/super/institutes/doiqwdqionqw/course?id=23edd23d"
    }
  ]

  async function handleCreateCourse(data: any) {
    console.log(data)
  }

  async function handleEditDept(data: any) {
    console.log(data)
  }
</script>

<template>
  <Page title="A University Department">
    <div w="full" flex="~ wrap items-start justify-between gap-3">
      <!-- Department Meta Info -->
      <DepartmentMeta />

      <!-- Actions -->
      <div flex="horizontal gap-2 shrink-1">
        <ui-button
          @click="editModal = true"
          icon="i-tabler-pencil"
          label="Edit"
          variant="secondary"
        />

        <ui-button
          @click="deleteModal = true"
          icon="i-tabler-trash"
          label="Delete"
          variant="destructive"
        />
      </div>
    </div>

    <!-- Course List -->
    <UiBlock heading="Courses">
      <template #extra>
        <ui-button
          @click="createModal = true"
          variant="secondary"
          label="Create Course"
          icon="i-tabler-plus"
        />
      </template>
      <UiContentList cols="3" :items="courses" :icon="ICONS.course" />
    </UiBlock>

    <LazyUiFormModal
      v-model="createModal"
      title="Create Course"
      description="Create a new Course"
      @submit="handleCreateCourse"
      submit-label="Create Course"
      :schema="formSchemas.course"
      double
      size="large"
    />

    <LazyUiFormModal
      v-model="editModal"
      title="Edit Department"
      description="Update the department's info"
      @submit="handleEditDept"
      submit-label="Proceed"
      :schema="formSchemas.department"
    />

    <UiConfirmModal
      title="Delete Department"
      v-model="deleteModal"
      description="Are you sure you want to delete this department?"
      is-delete
    />
  </Page>
</template>
