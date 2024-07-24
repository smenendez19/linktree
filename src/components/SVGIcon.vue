<template>
  <component :is="dynamicComponent" />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const dynamicComponent = defineAsyncComponent(
  () => import(`../assets/svg/${props.name}.svg?component`)
);
</script>
