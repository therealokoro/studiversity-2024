<script lang="ts" setup>
  const statusCards = [
    {
      title: "Session",
      icon: "i-mingcute-group-2-line",
      amount: "2024/2025",
      subtext: "Ends 15h April"
    },
    {
      title: "Students",
      icon: "i-mingcute-group-3-line",
      amount: "5000",
      subtext: "This Session"
    },
    {
      title: "Lecturers",
      icon: "i-mingcute-group-2-line",
      amount: "50",
      subtext: "This Session"
    }
  ]
</script>

<template>
  <Page title="My Dashboard">
    <DashboardUserGreeting
      name="Okoro Redemption"
      sub-paragraph="Good Evening 🌔, Today is 21st May 2023. You are amazing!! 💪"
      badge="Admin"
      badge-color="yellow"
    />

    <!-- Quick Stats -->
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
  </Page>
</template>
