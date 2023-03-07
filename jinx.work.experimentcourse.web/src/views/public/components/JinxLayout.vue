<template>
  <div class="jinx-layout" :class="{ wide: wide }">
    <jinx-navbar-menu></jinx-navbar-menu>
    <div class="jinx-layout-center">
      <div class="jinx-layout-sidebar" v-if="!noside">
        <slot name="sidebar"></slot>
      </div>
      <div class="jinx-layout-body">
        <slot></slot>
      </div>
    </div>
    <jinx-layout-footer></jinx-layout-footer>
  </div>
</template>

<script setup>
import JinxNavbarMenu from "../components/JinxNavbarMenu.vue";
import JinxLayoutFooter from "../components/JinxLayoutFooter.vue";

const props = defineProps({
  wide: {
    tyep: Boolean,
    default: false,
  },
  noside: {
    tyep: Boolean,
    default: false,
  },
});
</script>

<style lang="less" scoped>
.jinx-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: @typical-width;
  overflow: hidden;

  .jinx-layout-center {
    flex: 1;
    overflow: hidden;
    display: flex;
    width: @typical-width;
    margin: 0 auto;

    .jinx-layout-sidebar {
      width: 360px;
      // border-right: 1px solid @border-color;
      box-shadow: 0 0 5px @border-shadow-color;
    }
    .jinx-layout-body {
      flex: 1;
      overflow-y: auto;
    }
    .jinx-layout-body::-webkit-scrollbar {
      width: 5px;
    }
    .jinx-layout-body::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
      opacity: 0.2;
      background: rgba(0, 0, 0, 0.2);
    }
    .jinx-layout-body::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}

.jinx-layout.wide {
  :deep(.jinx-layout-center) {
    width: 100%;
  }
  :deep(.jinx-navbar-menu) {
    width: 100%;
  }
  :deep(.jinx-navbar .jinx-menu-item:first-child) {
    margin-left: 30px;
  }
  :deep(.jinx-navbar .jinx-navbar-item:last-child) {
    margin-right: 10px;
  }
}
</style>
