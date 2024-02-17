<script lang="ts" setup>
  const title = "Introduction to Computer Science"

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
  <Page :title="title">
    <PageHeading
      :heading="title"
      subHeading="CSC101 | Computer Science | 100LVL"
    />

    <UiContentList :icon="ICONS.material" :items="materials" />
  </Page>
</template>
