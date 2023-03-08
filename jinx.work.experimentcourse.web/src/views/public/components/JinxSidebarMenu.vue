<template>
  <div>
    <div class="sidebar-menu-title jinx-title">个人中心</div>
    <div class="sidebar-menu">
      <div class="title">学习</div>
      <ul class="menu">
        <li class="menu-item" :class="{ active: routename === 'UserCourse' }">我的课程</li>
        <li class="menu-item" :class="{ active: routename === 'UserClass' }">我的班级</li>
      </ul>
    </div>
    <div class="sidebar-menu">
      <div class="title">账户</div>
      <ul class="menu">
        <li class="menu-item" :class="{ active: routename === 'ResetPassword' }">修改密码</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const $route = useRoute();
const routename = $route.name;
</script>

<style lang="less" scoped>
.sidebar-menu-title {
  margin: 20px 0;
}
.sidebar-menu {
  .title {
    font-size: 18px;
    color: #666666;
  }
  .menu {
    list-style: none;
  }
}
</style>
