<template>
  <jinx-layout :wide="true">
    <template #sidebar>
      <div class="module-navbar">
        <div class="experiment-title"><span v-text="experiment.title"></span></div>
        <div class="module-header"><span>实验模块</span></div>
        <div class="module-progress">
          <div class="module-progress-prev" :class="{ disabled: menuIndex === 0 }" @click="handlePrevMenu">
            <jinx-icon-svg icon="angle-left" clazz="icon" v-if="menuIndex !== 0"></jinx-icon-svg>
            <jinx-icon-svg icon="angle-left-disabled" clazz="icon" v-else></jinx-icon-svg>
            <span>上一模块</span>
          </div>
          <div class="module-progress-title">
            <div class="text"><span v-text="experiment.menus[menuIndex].title"></span></div>
          </div>
          <div class="module-progress-next" :class="{ disabled: menuIndex === experiment.menus.length - 1 }" @click="handleNextMenu">
            <span>下一模块</span>
            <jinx-icon-svg icon="angle-left" clazz="icon" style="transform: rotate(180deg)" v-if="menuIndex !== experiment.menus.length - 1"></jinx-icon-svg>
            <jinx-icon-svg icon="angle-left-disabled" clazz="icon" style="transform: rotate(180deg)" v-else></jinx-icon-svg>
          </div>
        </div>
        <div class="module-introduce" v-if="experiment.menus[menuIndex].introduce"><span v-text="experiment.menus[menuIndex].introduce"></span></div>
        <ul class="module-menu">
          <li v-for="(item, index) in experiment.menus[menuIndex].modules" :class="{ active: moduleIndex === index }" @click="handleChangeModule(index)">
            <jinx-icon-svg icon="pdf" clazz="icon" v-if="item.type === 'pdf'"></jinx-icon-svg>
            <jinx-icon-svg icon="code" clazz="icon" v-else></jinx-icon-svg>
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
    </template>
    <template #default>
      <div class="module-iframe" v-if="experiment.menus[menuIndex].modules[moduleIndex].type === 'pdf'">
        <iframe :src="pdf"></iframe>
      </div>
      <div class="module-download" v-else>
        <div class="download">下载</div>
        <div class="module-file">
          <jinx-icon-svg icon="zip" clazz="icon"></jinx-icon-svg>
          <span class="text" v-text="experiment.menus[menuIndex].modules[moduleIndex].resource" @click="handleDownloadResource"></span>
        </div>
        <el-button class="module-download-button" @click="handleDownloadResource">点击下载</el-button>
      </div>
    </template>
  </jinx-layout>
</template>

<script setup>
import JinxLayout from "../components/JinxLayout.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import globalVariable from "../../../javascripts/global.variable";

const $router = useRouter();
const $route = useRoute();

let menuIndex = ref(($route.query.menu || 0) * 1);
let moduleIndex = ref(($route.query.module || 0) * 1);

const experiment = {
  title: "国民经济运行监测数字化实验",
  menus: [
    {
      title: "数据源与看板制作",
      introduce: "通过抓取到的数据结果，制作数据看板，方便高效直观地分析数据",
      modules: [
        {
          title: "分省年度统计数据",
          resource: "/resources/看板数据源.zip",
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
          resource: "/resources/看板数据源.zip",
          type: "code",
        },
      ],
    },
    {
      title: "新建项目与读取筛选数据",
      introduce: "通过抓取到的数据结果，制作数据看板，方便高效直观地分析数据",
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

let pdf = ref(globalVariable.$PdfViewerPath + experiment.menus[menuIndex.value].modules[moduleIndex.value].resource);

const handleChangeModule = (index) => {
  if (index !== moduleIndex.value) {
    moduleIndex.value = index;
    pdf.value = globalVariable.$PdfViewerPath + experiment.menus[menuIndex.value].modules[moduleIndex.value].resource;
  }
};

const handleDownloadResource = () => {
  window.open(globalVariable.$StaticResourcesPath + experiment.menus[menuIndex.value].modules[moduleIndex.value].resource);
};

const handlePrevMenu = () => {
  console.log(menuIndex.value);
  if (menuIndex.value !== 0) {
    console.log(menuIndex.value !== 0);
    menuIndex.value--;
    moduleIndex.value = 0;
    pdf.value = globalVariable.$PdfViewerPath + experiment.menus[menuIndex.value].modules[moduleIndex.value].resource;
  }
};

const handleNextMenu = () => {
  console.log(menuIndex.value);
  if (menuIndex.value !== experiment.menus[menuIndex.value].modules.length - 1) {
    console.log(menuIndex.value !== experiment.menus[menuIndex.value].modules.length - 1);
    menuIndex.value++;
    moduleIndex.value = 0;
    pdf.value = globalVariable.$PdfViewerPath + experiment.menus[menuIndex.value].modules[moduleIndex.value].resource;
  }
};
</script>

<style lang="less" scoped>
.module-navbar {
  padding: 0 20px;
  .experiment-title {
    font-size: 24px;
    font-weight: 400;
    margin: 20px 0;
  }
  .module-header {
    font-size: 20px;
    padding: 10px 0;
    // border-bottom: 1px solid @border-color;
    color: @primary-color;
  }
  .module-introduce {
    text-indent: 20px;
    line-height: 30px;
    font-size: 14px;
    color: #969696;
  }
  .module-progress {
    display: flex;
    background: #f1f1f1;
    width: calc(100% + 40px);
    margin-left: -20px;
    padding: 15px 20px;
    .module-progress-title {
      flex: 1;
      overflow: hidden;
      .text {
        width: 100%;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .module-progress-prev,
    .module-progress-next {
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: 12px;
      // width: 100px;
      span {
        margin: 0 8px;
      }
      .icon {
        width: 12px;
        height: 12px;
      }
    }
    .module-progress-next {
      justify-content: flex-end;
    }
    .module-progress-prev.disabled,
    .module-progress-next.disabled {
      cursor: not-allowed;
      color: #cdcdcd;
      user-select: none;
    }
  }
  .module-menu {
    border-right: none;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      font-size: 18px;
      padding: 20px 0 20px 20px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    li:hover {
      // background: @primary-color;
      background: lighten(@primary-color, 50%);
    }
    li.active {
      color: @primary-color;
    }
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
}

.module-iframe {
  font-size: 0;
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}

.module-download {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .download {
    font-size: 24px;
  }
  .module-file {
    border: 1px solid @border-color;
    border-radius: 6px;
    padding: 0 10px;
    margin: 20px 0;
    height: 60px;
    display: flex;
    align-items: center;
    width: 480px;
    .icon {
      width: 24px;
      height: 24px;
      path:nth-child(1) {
        fill: @primary-color;
      }
      path:nth-child(2) {
        fill: darken(@primary-color, 15%);
      }
    }
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      margin-left: 20px;
      cursor: pointer;
      flex: 1;
    }
    .text:hover {
      color: @primary-color;
      text-decoration: underline;
    }
  }
  .module-download-button {
    border-radius: 21px;
    height: 42px;
    padding: 0 40px;
    transition: all 0.2s ease-in-out;
  }
  .module-download-button:hover {
    color: #ffffff;
    background: @primary-color;
  }
}
</style>
