<script lang="ts" setup>
  const createModal = ref(false)
  const editModal = ref(false)
  const deleteModal = ref(false)

  const department = [
    {
      title: "Computer Science",
      link: "/super/institutes/doiqwdqionqw/department?id=23edd23d"
    },
    {
      title: "Mathematics",
      link: "/super/institutes/doiqwdqionqw/department?id=23edd23d"
    },
    {
      title: "Biochemistry",
      link: "/super/institutes/doiqwdqionqw/department?id=23edd23d"
    }
  ]

  async function handleCreateDept(data: any) {
    console.log(data)
  }
</script>

<template>
  <Page title="A University Faculty">
    <div w="full" flex="~ wrap items-start justify-between gap-3">
      <!-- Faculty Meta Info -->
      <FacultyMeta />

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

    <!-- Faculty List -->
    <UiBlock heading="Department">
      <template #extra>
        <ui-button
          @click="createModal = true"
          variant="secondary"
          label="Create Department"
          icon="i-tabler-plus"
        />
      </template>
      <UiContentList cols="3" :items="department" :icon="ICONS.department" />
    </UiBlock>

    <LazyUiFormModal
      v-model="createModal"
      title="Create Department"
      description="Create a new Department"
      @submit="handleCreateDept"
      submit-label="Create Department"
      :schema="formSchemas.department"
    />

    <LazyUiFormModal
      v-model="editModal"
      title="Edit Faculty"
      description="Update the faculty's info"
      @submit="handleCreateDept"
      submit-label="Proceed"
      :schema="formSchemas.faculty"
    />

    <UiConfirmModal
      title="Delete Faculty"
      v-model="deleteModal"
      description="Are you sure you want to delete this faculty?"
    />
  </Page>
</template>
