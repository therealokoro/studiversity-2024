<script lang="ts" setup>
  import type { ColumnDef, Table } from "@tanstack/vue-table"

  const tableRef = ref()
  const table = ref<Table<Student> | null>(null)
  const search = ref("")
  const filterModal = ref(false)
  const isDataFiltered = ref(false)
  const infoModal = ref(false)

  const basicInfo = ref([
    { label: "Account Status", value: "Active", icon: ICONS.accountActive },
    {
      label: "Name",
      value: "Okoro Redemption-Akaa Egwu",
      icon: ICONS.fullname
    },
    { label: "Faculty", value: "Science", icon: ICONS.faculty },
    { label: "Department", value: "Computer Science", icon: ICONS.department },
    { label: "Level", value: "200 Level", icon: ICONS.level },
    { label: "Admission No.", value: "1510204010", icon: ICONS.admissionNo },
    { label: "Username", value: "@therealokoro", icon: ICONS.username },
    { label: "Phone Number", value: "08176857507", icon: ICONS.phoneNumber },
    {
      label: "Email Address",
      value: "okororedemption24@gmail.com",
      icon: ICONS.email
    }
  ])

  type Student = {
    id: string
    name: string
    admissionNo: string
    department: string
    level: string
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

  const data: Student[] = [
    {
      id: "0987654",
      name: "Okoro Redemption-Akaa Egwu",
      department: "Computer Science",
      admissionNo: "1510204010",
      level: "100",
      date: "24th April 2024"
    },
    {
      id: "0987654",
      name: "Okoro Kelechi Egwu",
      department: "Medicine",
      admissionNo: "4787841522",
      level: "100",
      date: "24th April 2024"
    },
    {
      id: "0987654",
      name: "Okoro Sam-ishifi Egwu",
      department: "Architechture",
      admissionNo: "89105021021",
      level: "100",
      date: "24th April 2024"
    },
    {
      id: "0987654",
      name: "Okoro Akachukwu Egwu",
      department: "Microbiology",
      admissionNo: "DU-3891ebi2",
      level: "100",
      date: "24th April 2024"
    }
  ]

  const columns: ColumnDef<Student>[] = [
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
    { accessorKey: "admissionNo", header: "Admission No.", enableHiding: true },
    {
      accessorKey: "department",
      header: "Department",
      enableHiding: true,
      enableSorting: false
    },
    {
      accessorKey: "level",
      header: "Level",
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
        placeholder="Search for a student here"
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

          <FormKit
            type="cmultiselect"
            :options="filterOptions.departments"
            label="Level"
            name="level"
            placeholder="Select a level"
            validation="required"
          />
        </div>
      </FormKit>
    </UiModal>

    <UiModal
      width="md:max-w-800px"
      title="Student Info"
      description="Showing the student's basic and account information "
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
