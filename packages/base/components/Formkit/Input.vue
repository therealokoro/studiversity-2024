<script lang="ts" setup>
  const props = defineProps({ context: Object })
  const ctx = props.context!
  const attrs = computed(() => ctx?.attrs)
  const handleBlur = (e: any) => ctx.handlers.blur(e.target.value)
  const handleInput = (e: any) => ctx.node.input(e.target.value)
</script>

<template>
  <UiInput
    :id="ctx.id"
    v-model="ctx._value"
    :disabled="ctx.disabled"
    :readonly="attrs.readonly"
    :style="attrs.style"
    :tabindex="attrs.tabindex"
    :aria-label="attrs.ariaLabel"
    :type="attrs.ctype"
    :aria-labelledby="attrs.ariaLabelledby"
    :placeholder="attrs.placeholder"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
