<script lang="ts" setup>
  import { renderAsync } from "docx-preview"
  import { dataURLToBlob } from "blob-util"

  const { file } = defineProps<{ file: File }>()

  const container = ref<any>(null)

  onMounted(async () => {
    const fileReader = new FileReader()
    fileReader.onloadend = async function (e) {
      const dataURL = e.target!.result as string
      const blob = dataURLToBlob(dataURL)
      await renderAsync(blob, unref(container))
    }
    fileReader.readAsDataURL(file)
  })
</script>

<template>
  <div ref="container" />
</template>
