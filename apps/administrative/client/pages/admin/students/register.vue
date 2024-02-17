<script lang="ts" setup>
  const basicInfo = ref([
    {
      label: "Name",
      value: "Okoro Redemption-Akaa Egwu",
      icon: ICONS.fullname
    },
    { label: "Faculty", value: "Science", icon: ICONS.faculty },
    { label: "Department", value: "Computer Science", icon: ICONS.department },
    { label: "Level", value: "200 Level", icon: ICONS.level },
    { label: "Admission No.", value: "1510204010", icon: ICONS.admissionNo }
  ])

  const accInfo = ref([
    { label: "Username", value: "@therealokoro", icon: ICONS.username },
    { label: "Phone Number", value: "08176857507", icon: ICONS.phoneNumber },
    {
      label: "Email Address",
      value: "okororedemption24@gmail.com",
      icon: ICONS.email
    }
  ])
</script>

<template>
  <Page title="Register New Student">
    <PageHeading
      heading="Register/Activate Student"
      sub-heading="Register a new student on the portal or re-activate returning students"
    />

    <!-- Remita Verification -->
    <UiCard>
      <UiCardHeader>
        <UiCardTitle class="text-lg">Verify Payment</UiCardTitle>
        <UiCardDescription class="text-xs">
          Verify that the student has made payment for services using the remita
          RRR number provided
        </UiCardDescription>
      </UiCardHeader>
      <UiCardContent>
        <div w="full lg:40vw" space-y="4">
          <FormKit
            type="cinput"
            placeholder="e.g 1234-567-890"
            label="Enter the students RRR no."
            help="This can be gotten from the student's payment reciept"
          />
          <ui-button label="Verify Payment" />
        </div>
      </UiCardContent>
    </UiCard>

    <!-- Alert Banner -->
    <UiAlertBanner
      color="green"
      title="Success"
      body="Payment Verified! This is a new registration, proceed to register student"
      icon="lucide:alert-circle"
    />

    <!-- Student's Info -->
    <div w="full" grid="~ cols-1 md:cols-2 gap-x-7 gap-y-10">
      <!-- Basic Info -->
      <UiInfoBlock col-span="1 md:2" heading="Basic Information">
        <div flex="center">
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
        </div>
      </UiInfoBlock>

      <!-- Account Info -->
      <UiInfoBlock heading="Account Info">
        <div flex="center">
          <UiList class="py-0 space-y-7">
            <template v-for="n in accInfo">
              <UiListItem class="items-start p-0">
                <div flex-shrink="0" mt="0.5" size="5" :class="n.icon" />
                <UiListContent>
                  <UiListTitle class="lt-md:text-xs" :title="n.value" />
                  <UiListSubtitle :subtitle="n.label" />
                </UiListContent>
              </UiListItem>
            </template>
          </UiList>
        </div>
      </UiInfoBlock>
    </div>

    <!-- Action Buttons -->
    <div w="full" flex="center">
      <ui-button label="Activate Student" />
      <!-- <ui-button label="Register Student" /> -->
    </div>
  </Page>
</template>
