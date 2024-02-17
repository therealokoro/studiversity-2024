<script lang="ts" setup>
  const registerModal = ref(false)
  const statusCards = [
    {
      title: "This Session",
      icon: "i-mingcute-group-2-line",
      amount: "100",
      subtext: "Registered Lecturers"
    }
  ]
</script>

<template>
  <Page title="Institute Lecturers">
    <PageHeading
      heading="Lecturers List"
      sub-heading="Manage lecturer list across the Institute"
    >
      <template #extra>
        <ui-button
          to="/admin/lecturers/register"
          icon="i-mingcute-user-add-line"
          label="Register Lecturer"
        />
      </template>
    </PageHeading>

    <!-- Quick Stats Cards -->
    <div w="full" grid="~ md:cols-2 lg:cols-3 gap-4">
      <template v-for="s in statusCards" :key="i">
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

    <!-- Recently Registered Table -->
    <LecturersFullList />

    <UiModal
      v-model="registerModal"
      width="md:max-w-[50vw]"
      title="Register Lecturer"
      description="Fill the form below to register a new lecturer "
    >
      
    </UiModal>
  </Page>
</template>
