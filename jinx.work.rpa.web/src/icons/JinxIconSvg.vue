<template>
  <svg :class="clazz" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  clazz: {
    type: String,
    // default: "",
  },
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
}
</style>
