<script lang="ts" setup>
  const title = "Introduction to Computer Science"

  // const file = '/public/file.docx'
  // const { base64: fileBase64 } = useBase64(file)
  const file = ref() as Ref<File>
  function onFileInput(e: Event) {
    file.value = (e.target as HTMLInputElement).files![0]
  }
</script>

<template>
  <Page :title="title">
    <PageHeading
      :heading="title"
      subHeading="CSC101 | Computer Science | 100LVL"
    >
      <template #extra>
        <div flex="~ items-center gap-1">
          <ui-button
            variant="secondary"
            label="Save"
            icon="i-mingcute-bookmark-line"
          />
          <ui-button label="Download" icon="i-mingcute-download-3-line" />
        </div>
      </template>
    </PageHeading>

    <input mt-2 type="file" @input="onFileInput" />

    <ClientOnly>
      <!-- <LazyMaterialFilePreview v-if="file" :file="file" /> -->
    </ClientOnly>
  </Page>
</template>
