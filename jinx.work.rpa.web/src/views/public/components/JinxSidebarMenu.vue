<template>
  <div class="jinx-sidebar-menu">
    <div class="sidebar-menu-title jinx-title">个人中心</div>
    <div class="sidebar-menu">
      <div class="title">学习</div>
      <ul class="menu">
        <li class="menu-item" :class="{ active: routename === 'UserCourse' }" @click="handleMenuClick('UserCourse')">
          我的课程
        </li>
        <li class="menu-item" :class="{ active: routename === 'UserClass' }" @click="handleMenuClick('UserClass')">
          我的班级
        </li>
      </ul>
    </div>
    <div class="sidebar-menu">
      <div class="title">账户</div>
      <ul class="menu">
        <li class="menu-item" :class="{ active: routename === 'ResetPassword' }" @click="handleMenuClick('ResetPassword')">修改密码</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const $route = useRoute();
const $router = useRouter();
const routename = $route.name;

const handleMenuClick = (rn) => {
  if (routename !== rn) {
    switch (rn) {
      case "UserCourse":
        $router.push("/usercourse");
        break;
      case "UserClass":
        $router.push("/userclass");
        break;
      case "ResetPassword":
        $router.push("/resetpassword");
        break;
      default:
        break;
    }
  }
};
</script>

<style lang="less" scoped>
.jinx-sidebar-menu {
  padding: 20px 20px 20px 0;

  .sidebar-menu-title {
    margin-bottom: 20px;
  }

  .sidebar-menu {
    .title {
      font-size: 18px;
      color: #666666;
    }

    .menu {
      list-style: none;
      padding: 0;

      .menu-item {
        padding: 10px 20px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }

      .menu-item.active {
        background: @primary-color;
        color: #f1f1f1;
      }

      .menu-item:hover:not(.active) {
        color: @primary-color;
      }
    }
  }
}
</style>
