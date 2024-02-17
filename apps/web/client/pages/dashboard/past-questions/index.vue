<script lang="ts" setup>
  const questions = ref([
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#",
      badge: "Saved"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "24th April | Dr. Kelechi Okoro",
      link: "#"
    }
  ])

  onMounted(() => {
    setTimeout(() => {
      createError('Balllllllllllllllll')
    }, 2000)
  })
</script>

<template>
  <Page title="Past Questions">
    <PageHeading
      heading="Past Q&A"
      sub-heading="All the past questions which you have saved can be found here."
    />

    <div flex="~ col center gap-4">
      <div text="center" flex="~ col center gap-1">
        <Icon name="i-mingcute-search-line" size="30" />
        <h2 for="search-input" text="lg" font="bold">
          Search for Past Questions
        </h2>
        <p text="xs content-mute" font="bold">
          Looking for a past question, search through our database of past
          questions
        </p>
      </div>

      <div relative w="full md:50vw" mx="auto">
        <UiInput
          id="search-input"
          class="rounded-full px-10"
          placeholder="Type a keyword to search for a past question"
        />
      </div>
    </div>

    <UiContentList :icon="ICONS.question" :items="questions" />
  </Page>
</template>
