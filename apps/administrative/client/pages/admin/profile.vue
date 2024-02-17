<script lang="ts" setup>
  const editProfile = ref(false)

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

  const stats = ref([
    { label: "Saved Materials", value: "100", icon: ICONS.material },
    { label: "Courses", value: "20", icon: ICONS.course },
    { label: "Past Q&A", value: "10", icon: ICONS.question }
  ])

  const editFormSchema = ref([
    {
      $formkit: "cinput",
      name: "username",
      placeholder: "Enter a username for your account",
      label: "Username",
      validation: "required|starts_with:@"
    },
    {
      $formkit: "cinput",
      ctype: "email",
      name: "email",
      placeholder: "Enter an email address for your account",
      label: "Email Address",
      validation: "required|email"
    },
    {
      $formkit: "cfile",
      name: "file",
      placeholder: "Select a profile picture for your account",
      label: "Profile Pic",
      validation: "required"
    }
  ])
</script>

<template>
  <Page title="My Profile" spacing="space-y-8">
    <div
      bg="base-mute"
      rounded="$radius"
      p="4 md:6"
      flex="horizontal wrap gap-5"
    >
      <div flex="~ items-center gap-3">
        <UiAvatar fallback="OR" class="!sm:size-18" lt-md="text-xs" />
        <div flex="1" space-y="1">
          <h1 text="sm md:xl" font="bold">Okoro Redemption</h1>
          <h2 text="xxs md:xs content-mute" font="medium">@therealokoro</h2>
        </div>
      </div>

      <ui-button
        lt-sm="hidden"
        @click="editProfile = true"
        variant="secondary"
        icon="i-tabler-pencil"
        label="Edit Profile"
        title="Edit Profile"
      />

      <ui-button
        sm="hidden"
        @click="editProfile = true"
        variant="ghost"
        icon="i-tabler-pencil"
        title="Edit Profile"
      />
    </div>

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

      <!-- Statistics -->
      <UiInfoBlock heading="Statistics">
        <div flex="center">
          <UiList class="py-0 space-y-7">
            <template v-for="n in stats">
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

      <!-- Edit Profile Modal -->
      <UiModal
        title="Edit Profile"
        description="Edit your account profile"
        v-model="editProfile"
      >
        <FormKit type="form">
          <div w="full" space-y="5">
            <FormKitSchema :schema="editFormSchema" />
          </div>
        </FormKit>
      </UiModal>
    </div>
  </Page>
</template>
