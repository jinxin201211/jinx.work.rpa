<template>
  <jinx-layout-plain>
    <div class="experiment-title"><span v-text="experiment.title"></span></div>
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
      <div v-for="(menu, index) in experiment.menus" v-show="index === activeMenu">
        <div class="menu-title"><span v-text="menu.title"></span></div>
        <div class="menu-box">
          <div class="menu-summary">
            <span>概述</span>
            <svg t="1678023727238" class="icon" viewBox="0 0 1902 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3570"><path d="M0 0h1901.714L950.857 1024" p-id="3571"></path></svg>
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
import { ref } from "vue";

const experiment = {
  title: "国民经济运行监测数字化实验",
  menus: [
    {
      title: "数据源与看板制作",
      introduce: "",
      modules: [
        {
          title: "分省年度统计数据",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "zip",
        },
        {
          title: "导入数据与类型调整",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "制作工作表",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "制作仪表盘",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "样式处理",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "地方经济运行监测看板",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "code",
        },
      ],
    },
    {
      title: "新建项目与读取筛选数据",
      introduce: "",
      modules: [
        {
          title: "统计指标条件文件",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "zip",
        },
        {
          title: "新建项目与读取筛选数据",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "源代码",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "code",
        },
      ],
    },
    {
      title: "数据搜索",
      introduce: "",
      modules: [
        {
          title: "基础源代码",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "zip",
        },
        {
          title: "打开浏览器进入搜索界面",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "数据搜索",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "修改结果数据查看维度",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
      ],
    },
    {
      title: "数据抓取",
      introduce: "",
      modules: [
        {
          title: "基础源代码",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "zip",
        },
        {
          title: "按照年份抓取数据",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
      ],
    },
    {
      title: "保存数据并打开看板",
      introduce: "",
      modules: [
        {
          title: "基础源代码",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "zip",
        },
        {
          title: "保存数据",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "打开看板模板",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "pdf",
        },
        {
          title: "完整源代码",
          resource: "https://rpa.shapanyun.com/web/static/pdf/web/viewer.html?file=/products/经济大数据自动化机器人/教学大纲-经济大数据机器人系统.pdf&page=#1&v=1.0.0.12",
          type: "code",
        },
      ],
    },
  ],
};

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
.experiment-title,
.menu-title {
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0;
}

.experiment-box {
  background: #f1f1f1;
  padding: 20px;
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
  width: 5px;
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
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    cursor: pointer;
    .text {
      padding: 20px;
      line-height: 20px;
      color: #666666;
      text-align: center;
    }
  }

  .experiment-menu.active {
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    .text {
      color: @primary-color;
    }
  }
}

.menu-title {
  font-size: 18px;
  color: @primary-color;
}

.menu-box {
  padding-left: 2em;
  .menu-summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
}
</style>
