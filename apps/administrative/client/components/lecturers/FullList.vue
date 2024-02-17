<script lang="ts" setup>
  import type { ColumnDef, Table } from "@tanstack/vue-table"

  const tableRef = ref()
  const table = ref<Table<Lecturer> | null>(null)
  const search = ref("")
  const filterModal = ref(false)
  const isDataFiltered = ref(false)
  const infoModal = ref(false)

  const basicInfo = ref([
    {
      label: "Name",
      value: "Okoro Redemption-Akaa Egwu",
      icon: ICONS.fullname
    },
    {
      label: "Email Address",
      value: "okororedemption24@gmail.com",
      icon: ICONS.email
    },
    { label: "Faculty", value: "Science", icon: ICONS.faculty },
    { label: "Department", value: "Computer Science", icon: ICONS.department },
    { label: "Courses", value: "CSC304, CSC405", icon: ICONS.course }
  ])

  type Lecturer = {
    id: string
    name: string
    faculty: string
    department: string
    date: string
  }

  const filterOptions = {
    departments: [
      "Computer Science",
      "Medicine",
      "Architechture",
      "Microbiology"
    ]
  }

  const data: Lecturer[] = [
    {
      id: "0987654",
      name: "Okoro Redemption-Akaa Egwu",
      faculty: "Art",
      department: "Computer Science",
      date: "24th April 2024"
    },
    {
      id: "0987654",
      name: "Okoro Kelechi Egwu",
      faculty: "Art",
      department: "Medicine",
      date: "24th April 2024"
    },
    {
      id: "0987654",
      name: "Okoro Sam-ishifi Egwu",
      faculty: "Science",
      department: "Architechture",
      date: "24th April 2024"
    },
    {
      id: "0987654",
      name: "Okoro Akachukwu Egwu",
      faculty: "Science-3891ebi2",
      department: "Microbiology",
      date: "24th April 2024"
    }
  ]

  const columns: ColumnDef<Lecturer>[] = [
    {
      accessorKey: "name",
      header: "Fullname",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => {
        return h(
          resolveComponent("UiButton"),
          {
            variant: "link",
            class: "text-sm",
            onClick: () => {
              infoModal.value = true
            }
          },
          row.original.name
        )
      }
    },
    {
      accessorKey: "faculty",
      header: "Faculty",
      enableHiding: true,
      enableSorting: false
    },
    {
      accessorKey: "department",
      header: "Department",
      enableHiding: true,
      enableSorting: false
    },
    {
      accessorKey: "date",
      header: "Date Registered",
      enableHiding: true,
      enableSorting: false
    }
  ]

  async function handleFilter(data: any) {
    console.log(data)
  }
</script>

<template>
  <div>
    <div
      class="flex flex-wrap gap-2 items-center justify-end lg:justify-between"
    >
      <ui-button
        :variant="isDataFiltered ? 'primary' : 'secondary'"
        @click="filterModal = true"
        icon="i-tabler-filter"
        label="Filter List"
      />
      <UiInput
        type="search"
        v-model="search"
        placeholder="Search for a lecturer here"
        class="h-10 w-full lg:w-96"
      />
    </div>

    <UiTanStackTable
      @ready="table = $event"
      ref="tableRef"
      :search="search"
      :data="data"
      :columns="columns"
      class="mt-5 rounded-md border"
    >
      <template #empty>
        <div
          class="flex w-full flex-col items-center justify-center gap-3 py-5 text-muted-foreground"
        >
          <Icon name="lucide:database" class="size-8" />
          <span class="text-sm">There is no data available.</span>
        </div>
      </template>
    </UiTanStackTable>

    <UiModal
      v-model="filterModal"
      title="Filter Table"
      description="Filter the data that is being shown on the table"
    >
      <FormKit @submit="handleFilter" type="form" submit-label="Apply Filter">
        <div w="full" space-y="5">
          <FormKit
            type="cmultiselect"
            :options="filterOptions.departments"
            label="Faculty"
            name="faculty"
            placeholder="Select a faculty"
            validation="required"
          />

          <FormKit
            type="cmultiselect"
            :options="filterOptions.departments"
            label="Department"
            name="department"
            placeholder="Select a level"
            validation="required"
          />
        </div>
      </FormKit>
    </UiModal>

    <UiModal
      width="md:max-w-800px"
      title="Lecturer Info"
      description="Showing the lecturer's basic and account information "
      v-model="infoModal"
    >
      <UiInfoBlock>
        <UiList class="py-0 grid grid-cols-1 md:grid-cols-2 grid-gap-7">
          <template v-for="n in basicInfo">
            <UiListItem class="items-start p-0">
              <div flex-shrink="0" size="5" mt="0.5" :class="n.icon" />
              <UiListContent>
                <UiListTitle class="lt-md:text-xs" :title="n.value" />
                <UiListSubtitle :subtitle="n.label" />
              </UiListContent>
            </UiListItem>
          </template>
        </UiList>
      </UiInfoBlock>
    </UiModal>
  </div>
</template>
