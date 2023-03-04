<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">Processing Center</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<script setup></script>

<style lang="less" scoped></style>
