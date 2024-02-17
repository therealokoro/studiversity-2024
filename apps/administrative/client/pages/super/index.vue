<script lang="ts" setup>
  const stats = [
    { id: "wallet", value: 30, link: "/dashboard/wallet" },
    { id: "courses", value: 30, link: "/dashboard/courses" },
    { id: "materials", value: 200, link: "/dashboard/materials" },
    { id: "questions", value: 10, link: "/dashboard/past-questions" }
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

    <DashboardStatsGrid :stats="stats" />
  </Page>
</template>
