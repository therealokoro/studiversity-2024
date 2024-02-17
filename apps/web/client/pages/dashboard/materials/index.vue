<script lang="ts" setup>
  const materials = ref([
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh",
      badge: "Saved"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "/dashboard/materials/duiqwuihqwduh"
    }
  ])
</script>

<template>
  <Page title="My Materials">
    <PageHeading
      heading="Saved Materials"
      sub-heading="Materials which you've saved will be visible and accessible here"
    />

    <div flex="~ col center gap-4">
      <div text="center" flex="~ col center gap-1">
        <div class="i-mingcute-search-line" size="10" />
        <h2 for="search-input" text="lg" font="bold">Search for Materials</h2>
        <p text="xs content-mute" font="bold">
          Looking for a material, search through our database of materials
        </p>
      </div>

      <div relative w="full md:50vw" mx="auto">
        <UiInput
          id="search-input"
          class="rounded-full px-10"
          placeholder="Type a keyword to search for a material"
        />
      </div>
    </div>

    <UiContentList :icon="ICONS.material" :items="materials" />
  </Page>
</template>
