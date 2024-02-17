<script lang="ts" setup>
  const editModal = ref(false)
  const deleteModal = ref(false)

  async function handleDeleteCourse() {}

  async function handleEditCourse(data: any) {
    console.log(data)
  }

  const statusCards = [
    {
      title: "Subscribers",
      icon: "i-mingcute-group-3-line",
      amount: "5000",
      subtext: "This Session"
    },
    {
      title: "Materials",
      icon: ICONS.material,
      amount: "50",
      subtext: "This Session"
    }
  ]

  const materials = ref([
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/super/uploads/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/super/uploads/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/super/uploads/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/super/uploads/iiooiuji"
    }
  ])
</script>

<template>
  <Page title="The Course title">
    <PageHeading
      :icon="ICONS.course"
      heading="Introduction to Computer Science"
      sub-heading="Course of Computer Science | Dr. Kelechi Okoro"
    >
      <template #extra>
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
      </template>
    </PageHeading>

    <!-- Quick Stats -->
    <div w="full" grid="~ cols-2 lg:cols-3 gap-4">
      <template v-for="(s, i) in statusCards" :key="i">
        <UiCard>
          <UiCardHeader
            class="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <UiCardTitle class="text-sm font-medium">
              {{ s.title }}
            </UiCardTitle>
            <div :class="s.icon" size="5" text="content-mute" />
          </UiCardHeader>
          <UiCardContent class="space-y-1">
            <div text="2xl" font="bold">{{ s.amount }}</div>
            <p text="xs content-mute">{{ s.subtext }}</p>
          </UiCardContent>
        </UiCard>
      </template>
    </div>

    <UiBlock heading="Recent Materials">
      <UiContentList :icon="ICONS.material" :items="materials" />
    </UiBlock>

    <LazyUiFormModal
      v-model="editModal"
      title="Edit Course"
      description="Update the course's info"
      @submit="handleEditCourse"
      submit-label="Proceed"
      :schema="formSchemas.course"
    />

    <UiConfirmModal
      title="Delete Course"
      v-model="deleteModal"
      @confirm="handleDeleteCourse"
      description="Are you sure you want to delete this course?"
    />
  </Page>
</template>
