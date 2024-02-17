<script lang="ts" setup>
  const createModal = ref(false)
  const editModal = ref(false)
  const deleteModal = ref(false)
  const adminModal = ref(false)

  const faculties = [
    { title: "Faculty of Science", link: "/super/institutes/qswdwq/faculty" },
    { title: "Faculty of Art", link: "/super/institutes/qswdwq/faculty" },
    {
      title: "Faculty of Environmental Science",
      link: "/super/institute/qswdwq/faculty"
    }
  ]

  const admins = [
    {
      title: "Umar Abdullahi",
      subTitle: "umar@gmail.com",
      link: "/super/accounts/dqwdqwdqw"
    },
    {
      title: "Aminu Usman",
      subTitle: "aminu@gmail.com",
      link: "/super/accounts/dqwdqwdqw"
    }
  ]

  async function handleCreateFaculty(data: any) {
    console.log(data)
  }

  async function handleCreateAdmin(data: any) {
    console.log(data)
  }
</script>

<template>
  <Page title="A University">
    <div w="full" flex="~ wrap items-start justify-between gap-3">
      <!-- Institute Meta Info -->
      <InstituteMeta />

      <!-- Actions -->
      <div flex="horizontal gap-1 shrink-1">
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
    <UiBlock heading="Faculties">
      <template #extra>
        <ui-button
          @click="createModal = true"
          variant="secondary"
          label="Create Faculty"
          icon="i-tabler-plus"
        />
      </template>
      <UiContentList cols="3" :items="faculties" :icon="ICONS.faculty" />
    </UiBlock>

    <!-- Admin List -->
    <UiBlock heading="Admins">
      <template #extra>
        <ui-button
          @click="adminModal = true"
          icon="i-tabler-user-plus"
          label="New Admin"
          variant="secondary"
        />
      </template>
      <UiContentList cols="2" :items="admins" :icon="ICONS.profile" />
    </UiBlock>

    <LazyUiFormModal
      v-model="adminModal"
      title="Create Admin"
      description="Create a new Admin"
      @submit="handleCreateAdmin"
      submit-label="Create Admin"
      :schema="formSchemas.admin"
    />

    <LazyUiFormModal
      v-model="createModal"
      title="Create Faculty"
      description="Create a new Faculty"
      @submit="handleCreateFaculty"
      submit-label="Create Faculty"
      :schema="formSchemas.faculty"
    />

    <LazyUiFormModal
      v-model="editModal"
      title="Edit Institute"
      description="Update the institute's data"
      @submit="handleCreateFaculty"
      submit-label="Proceed"
      :schema="formSchemas.institute"
      double
      size="large"
    />

    <UiConfirmModal
      title="Delete Institute"
      v-model="deleteModal"
      description="Are you sure you want to delete this institute?"
    />
  </Page>
</template>
