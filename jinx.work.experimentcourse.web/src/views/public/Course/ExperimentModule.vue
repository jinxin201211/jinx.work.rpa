<template>
  <jinx-layout :wide="true">
    <template #sidebar>
      <div class="module-navbar">
        <div class="experiment-title"><span v-text="experiment.title"></span></div>
        <div class="module-header"><span>实验模块</span></div>
        <div class="module-progress">
          <div class="module-progress-prev" :class="{ disabled: menuIndex === 0 }" @click="handlePrevMenu">
            <svg t="1678029534805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8382"><path d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z" fill="#262626" p-id="8383"></path></svg>
            <span>上一模块</span>
          </div>
          <div class="module-progress-title">
            <div class="text"><span v-text="experiment.menus[menuIndex].title"></span></div>
          </div>
          <div class="module-progress-next" :class="{ disabled: menuIndex === experiment.menus.length - 1 }" @click="handleNextMenu">
            <span>下一模块</span>
            <svg t="1678029534805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8382" style="transform: rotate(180deg)"><path d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z" fill="#262626" p-id="8383"></path></svg>
          </div>
        </div>
        <div class="module-introduce" v-if="experiment.menus[menuIndex].introduce"><span v-text="experiment.menus[menuIndex].introduce"></span></div>
        <ul class="module-menu">
          <li v-for="(item, index) in experiment.menus[menuIndex].modules" :class="{ active: moduleIndex === index }" @click="handleChangeModule(index)">
            <svg v-if="item.type === 'pdf'" t="1678014597108" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3735">
              <path d="M726.624 64L864 201.376V960H160V64h566.624z m-24.256 32H192v832h640V229.92h-65.6a64 64 0 0 1-64-64L702.368 96z" fill="#646E7F" p-id="3736"></path>
              <path
                d="M491.552 320c8.768 0 18.176 3.2 24.832 9.024 6.624 5.792 10.464 13.344 12.736 20.832 4.512 14.976 4 31.36 1.472 50.048-1.856 13.504-9.92 31.456-14.08 46.912 1.024 1.76 0.864 2.976 1.856 4.736 16.96 28.864 39.808 57.92 64.16 78.912 1.6 1.376 3.136 1.92 4.736 3.104 12-2.208 26.432-7.936 37.216-9.088 20.384-2.048 38.08-2.368 53.696 1.856 7.872 2.144 15.488 5.504 21.984 11.84 6.4 6.336 10.464 16.192 10.464 25.44 0 11.36-6.88 26.24-18.336 32.448-11.36 6.208-23.04 6.88-38.176 6.88-26.752 0-51.2-12.064-74.176-27.584-27.52 5.952-53.696 10.24-83.104 20.416-21.76 7.488-35.392 16.256-54.56 24.736-5.952 9.536-10.752 22.752-16.8 30.944-12 16.128-23.904 29.344-37.28 38.336-13.376 9.024-31.84 14.304-47.904 5.824-7.552-3.904-14.88-9.92-18.4-19.2-3.52-9.216-1.664-19.456 1.824-26.656 7.2-14.4 19.424-23.52 34.848-33.664 13.76-9.024 37.28-16.832 55.904-25.536 14.304-24.192 29.184-47.264 41.344-76.384 9.536-22.848 12.608-41.472 18.944-62.848-12.768-25.152-22.624-49.664-25.216-71.36-1.696-13.76-1.216-26.976 5.504-39.264 6.656-12.384 21.856-20.704 36.512-20.704z m10.24 176.16c-4.192 11.616-5.056 21.44-9.92 33.152-5.376 12.8-12.8 22.08-18.72 34.528 4.16-1.536 6.624-3.584 10.912-5.056 20.16-6.944 38.112-8.864 58.144-14.208a350.176 350.176 0 0 1-40.416-48.416z"
                fill="#F74C4C"
                p-id="3737"
              ></path>
            </svg>
            <svg v-else t="1678014744040" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2708">
              <path
                d="M938.666667 503.893333v16.213334a32.853333 32.853333 0 0 1-9.386667 22.613333l-176.64 176.213333a21.333333 21.333333 0 0 1-30.293333 0l-30.293334-30.293333a20.906667 20.906667 0 0 1 0-29.866667L839.253333 512l-147.2-146.773333a21.333333 21.333333 0 0 1 0-30.293334l30.293334-29.866666a21.333333 21.333333 0 0 1 30.293333 0l176.64 176.213333a32 32 0 0 1 9.386667 22.613333zM184.746667 512l146.773333-146.773333a20.906667 20.906667 0 0 0 0-29.866667l-30.293333-30.293333a21.333333 21.333333 0 0 0-30.293334 0l-176.213333 176.213333a32.853333 32.853333 0 0 0-9.386667 22.613333v16.213334a32 32 0 0 0 9.386667 22.613333l176.64 176.213333a21.333333 21.333333 0 0 0 30.293333 0l30.293334-29.866666a21.333333 21.333333 0 0 0 0-30.293334z m469.333333-325.546667L612.693333 170.666667a22.186667 22.186667 0 0 0-27.733333 12.8L358.4 810.666667a21.333333 21.333333 0 0 0 12.8 27.306666l40.106667 14.506667a21.76 21.76 0 0 0 27.306666-12.8L665.173333 213.333333a21.333333 21.333333 0 0 0-12.8-26.88z"
                p-id="2709"
              ></path>
            </svg>
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
          <svg t="1678026046258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7405" width="200" height="200">
            <path d="M967.111111 281.6V910.222222c0 62.862222-50.915556 113.777778-113.777778 113.777778H170.666667c-62.862222 0-113.777778-50.915556-113.777778-113.777778V113.777778c0-62.862222 50.915556-113.777778 113.777778-113.777778h514.844444L967.111111 281.6z" fill="#1296db" p-id="7406"></path>
            <path d="M685.511111 167.822222V0L967.111111 281.6H799.288889c-62.862222 0-113.777778-50.915556-113.777778-113.777778" fill="#0a557d" p-id="7407"></path>
            <path d="M436.565333 68.437333h68.437334V0h-68.437334zM505.002667 136.874667h68.437333V68.437333h-68.437333zM436.565333 205.312h68.437334V136.874667h-68.437334zM505.002667 273.749333h68.437333V205.312h-68.437333z" fill="#FFFFFF" p-id="7408"></path>
            <path d="M436.565333 342.158222h68.437334V273.720889h-68.437334zM505.002667 410.624h68.437333V342.186667h-68.437333z" fill="#FFFFFF" p-id="7409"></path>
            <path d="M436.565333 479.032889h68.437334v-68.437333h-68.437334zM505.002667 547.470222h68.437333v-68.437333h-68.437333zM470.784 762.225778h68.437333v-68.437334h-68.437333v68.437334z m-34.218667-136.874667v136.874667c0 18.915556 15.331556 34.218667 34.218667 34.218666h68.437333c18.915556 0 34.218667-15.303111 34.218667-34.218666v-136.874667h-136.874667z" fill="#FFFFFF" p-id="7410"></path>
          </svg>
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
      .icon {
        path {
          fill: #cdcdcd;
        }
      }
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
