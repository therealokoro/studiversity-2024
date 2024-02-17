<script lang="ts" setup>
  const createModal = ref(false)
  async function handleCreateInstitute(data: any) {
    console.log(data)
  }
  const institutes = [
    {
      title: "Federal University, Birnin Kebbi",
      subTitle: "FUBK",
      link: "/super/institutes/dqdqdq",
      img: "/fubk.png"
    },
    {
      title: "Kebbi State University of Science and Technology",
      subTitle: "KSUSTA",
      link: "/super/institutes/dqdqdq",
      img: "/ksusta.png"
    },
    {
      title: "Ebonyi State University",
      subTitle: "EBSU",
      link: "/super/institutes/dqdqdq",
      img: "/ebsu.png"
    },
    {
      title: "Federal University of Technology",
      subTitle: "FUTMINNA",
      link: "/super/institutes/dqdqdq",
      img: "/futminna.png"
    }
  ]
</script>

<template>
  <Page title="Institutes">
    <!-- Page Heading -->
    <PageHeading
      heading="Registered Institutes"
      sub-heading="Below is a list of all registered institutes"
    >
      <!-- Create Institute Button -->
      <template #extra>
        <ui-button
          @click="createModal = true"
          label="New Institute"
          icon="i-tabler-plus"
        />
      </template>
    </PageHeading>

    <!-- Institute List -->
    <UiBlock>
      <UiContentList :icon="ICONS.institute" :items="institutes" />
    </UiBlock>

    <LazyUiFormModal
      v-model="createModal"
      title="Create Institute"
      description="Create a new institute"
      @submit="handleCreateInstitute"
      submit-value="Create Institute"
      :schema="formSchemas.institute"
      double
      size="large"
    />
  </Page>
</template>
