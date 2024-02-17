<script lang="ts" setup>
  const materials = ref([
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/iiooiuji"
    }
  ])
</script>

<template>
  <Page title="My Uploads">
    <PageHeading
      heading="My Uploads"
      subHeading="This is a list of all your uploaded documents"
    >
      <template #extra>
        <ui-button
          to="/dashboard/uploads/new"
          icon="i-tabler-cloud-upload"
          label="Upload Document"
        />
      </template>
    </PageHeading>

    <UiContentList :icon="ICONS.material" :items="materials" />
  </Page>
</template>
