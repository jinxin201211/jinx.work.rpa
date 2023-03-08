<script setup>
import { nextTick, provide, ref } from "vue";
let isRouterAlive = ref(true);

const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};

provide("reload", reload);
</script>

<template>
  <div style="width: 100%; height: 100%">
    <router-view v-slot="{ Component }" v-if="isRouterAlive">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: var(--primary-back-color);
}
#app {
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}
</style>
