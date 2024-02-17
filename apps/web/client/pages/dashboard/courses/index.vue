<script lang="ts" setup>
  const selectedCourseList = ref([
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    },
    {
      title: "Introduction to Computer Science",
      subTitle: "CSC101 | Computer Science | 100LVL",
      link: "/dashboard/courses/dqdwqdqwd"
    }
  ])

  // onMounted(() => {
  //   throw new Error('ahhhhhhhhhhhhhh')
  // })
</script>

<template>
  <Page title="My Courses">
    <PageHeading
      heading="My Courses"
      sub-heading="See all the courses you registered in one place"
    >
      <template #extra>
        <!-- Actions -->
        <div flex="horizontal gap-2 shrink-1">
          <ui-button
            to="/dashboard/courses/register"
            icon="i-tabler-pencil"
            label="Register Courses"
          />
        </div>
      </template>
    </PageHeading>

    <UiContentList :icon="ICONS.course" :items="selectedCourseList" />
  </Page>
</template>
