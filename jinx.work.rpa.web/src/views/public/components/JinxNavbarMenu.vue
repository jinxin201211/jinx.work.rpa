<template>
  <div class="jinx-navbar">
    <div class="jinx-navbar-menu">
      <ul class="jinx-menu">
        <li class="jinx-menu-item" :class="{ hover: hover === 'courselist' }" @click="$router.push('/courselist')">
          <span>课程</span>
        </li>
        <li class="jinx-menu-item" :class="{ hover: hover === 'userclass' }" @click="$router.push('/userclass')">
          <span>我的班级</span>
        </li>
        <li class="jinx-menu-item" :class="{ hover: hover === 'helpcenter' }" @click="$router.push('/helpcenter')">
          <span>帮助中心</span>
        </li>
      </ul>
      <ul class="jinx-navbar-right">
        <li class="jinx-navbar-item" @click="$router.push('/usercourse')">
          <span>我的课程</span>
        </li>
        <li class="jinx-navbar-item" @click="$router.push('/resetpassword')">
          <span>用户名</span>
        </li>
        <li class="jinx-navbar-item" @click="$router.push('/logout')">
          <span>退出</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { getCurrentInstance, onMounted, reactive, ref } from "vue";

const $router = useRouter();
const $route = useRoute();
const { proxy } = getCurrentInstance();

let hover = ref($route.meta.menu);

onMounted(() => {
  refresh();
  hover.value = $route.meta.menu;
});

const refresh = () => {
};
</script>

<style lang="less" scoped>
.jinx-navbar {
  width: 100%;
  min-width: @typical-width;
  box-sizing: border-box;
  background: #ffffff;
  padding: 0;
  // border-bottom: 1px solid @border-color;
  box-shadow: 0 0 5px @border-shadow-color;
  // box-shadow: 0px 2px 24px 6px rgba(51, 51, 51, 0.6);
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;

  .jinx-navbar-menu {
    margin: 0 auto;
    padding: 0;
    width: @typical-width;
    display: flex;

    .jinx-menu {
      // margin: 0 auto;
      margin: 0;
      padding: 0;
      // width: @typical-width;
      list-style: none;
      height: 60px;
      line-height: 60px;
      flex: 1;
      // text-align: right;

      .jinx-menu-item {
        display: inline-block;
        margin: 0 30px;
        text-align: center;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        cursor: pointer;
        z-index: 999;
        position: relative;
        font-size: 18px;

        span {
          transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        }
      }

      .jinx-menu-item:first-child {
        margin-left: 0;
      }

      .jinx-menu-item::after {
        content: "";
        position: absolute;
        bottom: 6px;
        left: 10%;
        width: 80%;
        height: 3px;
        border-radius: 3px;
        background: @primary-color;
        visibility: hidden;
        opacity: 0;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s;
      }

      .jinx-menu-item.hover,
      .jinx-menu-item:hover {
        span {
          color: @primary-color;
        }
      }

      .jinx-menu-item:hover:after {
        visibility: visible;
        opacity: 1;
      }
    }

    .jinx-navbar-right {
      // margin: 0 auto;
      margin: 0;
      padding: 0;
      // width: @typical-width;
      list-style: none;
      height: 60px;
      line-height: 60px;
      // text-align: right;

      .jinx-navbar-item {
        display: inline-block;
        margin: 0 10px;
        text-align: center;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        cursor: pointer;
        z-index: 999;
        position: relative;
        color: #0099cc;

        span {
          transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        }
      }

      .jinx-navbar-item:last-child {
        margin-right: 0;
      }

      .jinx-navbar-item.hover,
      .jinx-navbar-item:hover {
        span {
          color: lighten(#0099cc, 20%);
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
