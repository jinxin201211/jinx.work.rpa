<template>
  <div class="jinx-layout" :class="{ wide: wide }">
    <jinx-navbar-menu></jinx-navbar-menu>
    <div class="jinx-layout-center">
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
  min-height: 100%;
  min-width: @typical-width;
  overflow: hidden;

  .jinx-layout-center {
    flex: 1;
    // overflow: hidden;
    display: flex;
    width: @typical-width;
    margin: 0 auto;

    .jinx-layout-sidebar {
      width: 360px;
      border-right: 1px solid @border-color;
    }
    .jinx-layout-body {
      flex: 1;
      // overflow-y: auto;
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
}
</style>
