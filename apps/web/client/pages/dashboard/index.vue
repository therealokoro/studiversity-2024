<script lang="ts" setup></script>

<template>
  <Page title="My Dashboard">
    <DashboardUserGreeting
      name="Okoro Redemption"
      sub-paragraph="Good Evening 🌔, Today is 21st May 2023. You are amazing!! 💪"
      badge="Admin"
      badge-color="yellow"
    >
      <template #extra>
        <ui-button
          to="/dashboard/uploads/new"
          icon="i-tabler-cloud-upload"
          label="Upload Document"
        />
      </template>
    </DashboardUserGreeting>

    <DashboardStatsGrid />
  </Page>
</template>
