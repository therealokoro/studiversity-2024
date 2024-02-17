<template>
  <Primitive
    :class="styles({ class: props.class })"
    v-bind="reactiveOmit(props, 'class')"
  >
    <slot></slot>
  </Primitive>
</template>

<script lang="ts" setup>
  import { Primitive } from "radix-vue"
  import type { PrimitiveProps } from "radix-vue"

  const props = withDefaults(
    defineProps<
      PrimitiveProps & {
        class?: any
      }
    >(),
    {
      as: "div"
    }
  )

  const styles = tv({
    base: "container mx-auto px-[1.2rem] md:px-[0.8rem] lg:px-[5rem] xl:px-[7rem]"
  })
</script>
