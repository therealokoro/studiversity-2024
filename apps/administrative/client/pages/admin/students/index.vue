<script lang="ts" setup>
  const statusCards = [
    {
      title: "Today",
      icon: "i-mingcute-group-2-line",
      amount: "100",
      subtext: "Registered Students"
    },
    {
      title: "This Session",
      icon: "i-mingcute-group-3-line",
      amount: "5000",
      subtext: "Registered Students"
    }
  ]
</script>

<template>
  <Page title="Institute Students">
    <PageHeading
      heading="Students List"
      sub-heading="Manage student list across the Institute"
    >
      <template #extra>
        <ui-button
          to="/admin/students/register"
          icon="i-mingcute-user-add-line"
          label="Register Student"
        />
      </template>
    </PageHeading>

    <!-- Quick Stats Cards -->
    <div w="full" grid="~ md:cols-2 lg:cols-3 gap-4">
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

    <!-- Recently Registered Table -->
    <UiBlock
      heading="Recently Registered"
      description="A list of the most recent students registered This Session"
    >
      <template #extra>
        <div space-x="2">
          <ui-button
            variant="secondary"
            icon="i-mingcute-list-check-3-line"
            label="View Full List"
            to="/admin/students/list"
          />
        </div>
      </template>

      <StudentsRecentlyRegistered />
    </UiBlock>
  </Page>
</template>
