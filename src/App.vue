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
      <transition name="page">
        <keep-alive include="home">
          <component :is="Component" />
        </keep-alive>
      </transition>
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
}
#app {
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}

.page-enter-active {
  animation: page-in 0.2s ease-in-out 0.2s;
}
.page-leave-active {
  animation: page-out 0.2s ease-in-out;
}
@keyframes page-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-200px);
  }
}
@keyframes page-in {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
