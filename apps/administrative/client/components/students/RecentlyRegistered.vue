<script lang="ts" setup>
  const list = [
    {
      sn: "1",
      fullname: "Okoro Redemption-Akaa Egwu",
      department: "Computer Science",
      admissionNo: "1510204010",
      date: "24th April 2024",
      link: "#"
    },
    {
      sn: "2",
      fullname: "Okoro Kelechi Egwu",
      department: "Medicine",
      admissionNo: "4787841522",
      date: "24th April 2024",
      link: "#"
    },
    {
      sn: "3",
      fullname: "Okoro Sam-ishifi Egwu",
      department: "Architechture",
      admissionNo: "89105021021",
      date: "24th April 2024",
      link: "#"
    },
    {
      sn: "4",
      fullname: "Okoro Akachukwu Egwu",
      department: "Microbiology",
      admissionNo: "DU-3891ebi2",
      date: "24th April 2024",
      link: "#"
    }
  ]

  const headers = ["Fullname", "Department", "Admission No", "Date"]
</script>

<template>
  <div class="overflow-x-auto rounded-md border pb-4">
    <UiTable>
      <UiTableCaption>
        Showing the last 10 registered students This Session
      </UiTableCaption>
      <UiTableHeader>
        <UiTableRow>
          <UiTableHead class="w-[50px]">S/N</UiTableHead>
          <UiTableHead v-for="item in headers">
            {{ item }}
          </UiTableHead>
          <UiTableHead />
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody class="last:border-b">
        <template v-for="item in list" :key="item.id">
          <UiTableRow>
            <UiTableCell class="font-medium text-center">
              {{ item.sn }}
            </UiTableCell>
            <UiTableCell>{{ item.fullname }}</UiTableCell>
            <UiTableCell>{{ item.department }}</UiTableCell>
            <UiTableCell>{{ item.admissionNo }}</UiTableCell>
            <UiTableCell>{{ item.date }}</UiTableCell>
            <UiTableCell>
              <ui-button :to="item.link" variant="link" label="View" />
            </UiTableCell>
          </UiTableRow>
        </template>
      </UiTableBody>
    </UiTable>
  </div>
</template>
