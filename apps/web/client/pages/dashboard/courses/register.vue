<script lang="ts" setup>
  const renderList = ref([
    {
      title: "The first one",
      info: "CSC101 | Computer Science | 100LVL"
    },
    {
      title: "The second one",
      info: "CSC101 | Computer Science | 100LVL"
    },
    {
      title: "Introduction to Computer Science",
      info: "CSC101 | Computer Science | 100LVL"
    },
    {
      title: "Introduction to Computer Science",
      info: "CSC101 | Computer Science | 100LVL"
    }
  ])
</script>

<template>
  <Page title="Register Courses">
    <PageHeading
      heading="Register Courses"
      subHeading="Click on a course to select or deselect for registration"
    />

    <div flex="~ col center gap-4">
      <div text="center" flex="~ col center gap-1">
        <Icon name="i-mingcute-search-line" size="30" />
        <h2 for="search-input" text="lg" font="bold">Search for Courses</h2>
        <p text="xs content-mute" font="bold">
          Search for a wide range of courses across departments and faculties
        </p>
      </div>

      <div relative w="full md:50vw" mx="auto">
        <UiInput
          id="search-input"
          class="rounded-full px-10"
          placeholder="Type a keyword to search for course"
        />
      </div>
    </div>

    <LazyCourseSelector :courses="renderList" />

    <div w="full" flex="center">
      <ui-button label="Save Selections" />
    </div>
  </Page>
</template>
