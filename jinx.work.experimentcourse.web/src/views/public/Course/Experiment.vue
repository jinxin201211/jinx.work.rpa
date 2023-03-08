<template>
  <jinx-layout-plain>
    <div class="experiment-title jinx-title"><span v-text="experiment.title"></span></div>
    <div class="experiment-box">
      <div class="experiment-help">
        <el-link @click="handleHelpClick('/resources/机器人设计常见问题指南.pdf')">机器人设计常见问题指南</el-link>
      </div>
      <div class="experiment-help">
        <el-link @click="handleHelpClick('/resources/机器人设计与调试技巧.pdf')">机器人设计与调试技巧</el-link>
      </div>

      <div class="experiment-menus">
        <div title="可直接做任一子模块，各子模块无依赖关系；尤其当您时间不够，建议只挑重要模块讲解。" class="experiment-menu" v-for="(item, index) in experiment.menus" :class="{ active: activeMenu === index }" @click="handleChangeMenu(index)">
          <span class="text" v-text="item.title"></span>
        </div>
      </div>
      <div class="experiment-module-box jinx-soft-flat" v-for="(menu, index) in experiment.menus" v-show="index === activeMenu">
        <div class="menu-title"><span v-text="menu.title"></span></div>
        <div class="menu-box">
          <div class="menu-introduce" v-text="menu.introduce"></div>
          <div class="menu-summary">
            <span>概述</span>
            <jinx-icon-svg icon="down" clazz="icon"></jinx-icon-svg>
          </div>
          <div class="menu-module" v-for="(module, index2) in menu.modules">
            <el-link @click="handleModuleClick(index, index2)"><span v-text="module.title"></span></el-link>
          </div>
        </div>
        <div class="menu-button">
          <el-button @click="handleViewModule" size="large">浏览</el-button>
        </div>
      </div>

      <!-- <el-tabs v-model="activeTab" @tab-change="handleTabChange">
        <el-tab-pane v-for="(item, index) in experiment.menus" :label="item.title" :name="index">
          <div class="experiment-title"><span v-text="item.title"></span></div>
        </el-tab-pane>
      </el-tabs> -->
    </div>
  </jinx-layout-plain>
</template>

<script setup>
import { useRouter } from "vue-router";
import JinxLayoutPlain from "../components/JinxLayoutPlain.vue";
import globalVariable from "../../../javascripts/global.variable";
import test from "../../../javascripts/test";
import { ref } from "vue";

const experiment = test.course.experiments[0];

const activeMenu = ref(0);

const $router = useRouter();
const handleHelpClick = (url) => {
  window.open(globalVariable.$StaticResourcesPath + url, "_blank");
};

const handleChangeMenu = (index) => {
  if (index !== activeMenu.value) {
    activeMenu.value = index;
  }
};

const handleModuleClick = (menuIndex, moduleIndex) => {
  $router.push({
    path: "/course/experiment/module",
    query: {
      menu: menuIndex,
      module: moduleIndex,
    },
  });
};

const handleViewModule = () => {
  handleModuleClick(0, 0);
};
</script>

<style lang="less" scoped>
.experiment-title {
  margin: 20px 0;
}

.experiment-box {
  // background: #f1f1f1;
  // padding: 20px;
}
.experiment-help,
.menu-module {
  font-size: 20px;
  line-height: 32px;
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}
.experiment-help::before,
.menu-module::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: @border-color;
}

.experiment-menus {
  display: flex;
  justify-content: space-between;
  padding: 30px 15%;
  .experiment-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    background: linear-gradient(145deg, #d9d9d9, #ffffff);
    box-shadow: 5px 5px 20px #cfcfcf, -5px -5px 20px #ffffff;
    cursor: pointer;
    .text {
      padding: 20px;
      line-height: 20px;
      color: #666666;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .experiment-menu.active {
    background: linear-gradient(145deg, #ffffff, #d9d9d9);
    box-shadow: 5px 5px 11px #cdcdcd, -5px -5px 11px #ffffff;
    .text {
      color: @primary-color;
    }
  }
}

.experiment-module-box {
  border-radius: 12px;
  // background: @primary-back-color;
  // box-shadow: 7px 7px 12px #e0e0e0, -7px -7px 12px #ffffff;
  padding: 20px;
  padding-bottom: 40px;
  overflow: hidden;
  position: relative;
  .menu-title {
    font-size: 14px;
    margin: 0;
    background: @primary-color;
    color: #f1f1f1;
    padding: 7px 22px;
    border-radius: 20px;
    display: inline-block;
  }
  .menu-box {
    padding-left: 2em;
    .menu-introduce {
      margin-top: 20px;
      text-indent: 20px;
      line-height: 30px;
      font-size: 14px;
      color: #969696;
    }
    .menu-summary {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
      .icon {
        width: 14px;
        height: 14px;
        margin-left: 8px;
      }
    }
  }
  .menu-button {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -40px;
    transition: all 0.2s ease-in-out;
    :deep(.el-button) {
      width: 100%;
      border: none;
      background: @primary-color;
      border-radius: 0;
      color: #f1f1f1;
    }
  }
}
.experiment-module-box:hover {
  .menu-button {
    bottom: 0;
  }
}
</style>
