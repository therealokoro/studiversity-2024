<script lang="ts" setup>
  const renderList = [
    "The first one (CSC101)",
    "The second one (CSC101)",
    "Introduction to Computer Science (CSC101)",
    "Introduction to Computer Science (CSC101)"
  ]

  const { items, select } = useSelectable(renderList, {
    initial: (item) => {
      return ["The first one", "The second one"].includes(item)
    }
  })
</script>

<template>
  <Page title="Upload a Document">
    <PageHeading
      heading="Upload Document"
      sub-heading="Upload a new material or past question under a course"
    />

    <UiBlock heading="Fill the form to upload document">
      <FormKit type="form" submit-label="Upload File">
        <div w="full" grid="~ cols-1 md:cols-2 gap-5">
          <FormKit
            type="cinput"
            name="title"
            placeholder="Enter a title for the material"
            label="Material Title"
            help="This will be help students search for the material"
            validation="required"
          />

          <FormKit
            type="cinput"
            name="description"
            placeholder="Enter a description for the material"
            label="Short Description"
            help="This is an optional field for added information about the material"
          />

          <FormKit
            type="cselect"
            name="course"
            placeholder="Select a course for the material"
            label="Select Course"
            help="This is the course which the material will be uploaded to"
            validation="required"
            :options="renderList"
          />

          <FormKit
            type="cfile"
            name="file"
            placeholder="Select a file to upload for the material"
            label="Select File"
            help="This will be the downloadable file"
            validation="required"
            size="200000"
            accept="pptx|ppt|pdf|doc|docx|xls|xlsx"
          />
        </div>
      </FormKit>
    </UiBlock>
  </Page>
</template>
