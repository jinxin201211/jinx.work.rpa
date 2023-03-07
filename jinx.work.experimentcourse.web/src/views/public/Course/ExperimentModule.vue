<template>
  <jinx-layout :wide="true">
    <template #sidebar>
      <div class="module-navbar">
        <div class="experiment-title"><span v-text="experiment.title"></span></div>

        <el-tabs v-model="activeTab">
          <el-tab-pane label="实验模块" name="module">
            <div class="module-progress">
              <div class="module-progress-prev" :class="{ disabled: menuIndex === 0 }" @click="handlePrevMenu">
                <jinx-icon-svg icon="angle-left" clazz="icon" v-if="menuIndex !== 0"></jinx-icon-svg>
                <jinx-icon-svg icon="angle-left-disabled" clazz="icon" v-else></jinx-icon-svg>
                <span>上一模块</span>
              </div>
              <div class="module-progress-title" :title="experiment.menus[menuIndex].title">
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
          </el-tab-pane>
          <el-tab-pane label="实验数据" name="work">
            <ul class="module-menu">
              <li :class="{ active: workIndex === 0 }" @click="handleUploadWork()">
                <jinx-icon-svg icon="upload" clazz="icon"></jinx-icon-svg>
                <span>上传数据</span>
              </li>
              <li :class="{ active: workIndex === 1 }" @click="handleViewWork()">
                <jinx-icon-svg icon="view" clazz="icon"></jinx-icon-svg>
                <span>查看数据</span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </template>
    <template #default>
      <template v-if="activeTab === 'module'">
        <div class="module-iframe" v-if="experiment.menus[menuIndex].modules[moduleIndex].type === 'pdf'">
          <iframe :src="pdf"></iframe>
        </div>
        <div class="module-download" v-else>
          <div class="module-download-box jinx-soft-flat">
            <div class="module-download-box-body">
              <div class="download">下载</div>
              <div class="module-file jinx-soft-pressed">
                <jinx-icon-svg icon="file-zip" clazz="icon"></jinx-icon-svg>
                <span class="text" v-text="experiment.menus[menuIndex].modules[moduleIndex].resource" @click="handleDownloadResource"></span>
              </div>
            </div>
            <el-button class="module-download-button" @click="handleDownloadResource">点击下载</el-button>
          </div>
        </div>
      </template>
    </template>
  </jinx-layout>
</template>

<script setup>
import JinxLayout from "../components/JinxLayout.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import globalVariable from "../../../javascripts/global.variable";
import test from "../../../javascripts/test";

const $router = useRouter();
const $route = useRoute();

let activeTab = ref("module");

let menuIndex = ref(($route.query.menu || 0) * 1);
let moduleIndex = ref(($route.query.module || 0) * 1);

const experiment = test.course.experiments[0];

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

let workIndex = ref(0);
const handleUploadWork = () => {
  workIndex.value = 0;
};
const handleViewWork = () => {
  workIndex.value = 1;
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
    color: @primary-color;
  }
  .module-introduce {
    text-indent: 20px;
    line-height: 30px;
    font-size: 14px;
    color: #969696;
  }
  :deep(.el-tabs__nav) {
    width: 100%;
  }
  :deep(.el-tabs__content) {
    overflow: initial;
  }
  :deep(.el-tabs__item) {
    width: 50%;
    padding: 0;
    text-align: center;
    font-size: 18px;
  }
  .module-progress {
    display: flex;
    background: #e0e0e0;
    width: calc(100% + 40px);
    margin-left: -20px;
    overflow: hidden;
    .module-progress-title {
      flex: 1;
      overflow: hidden;
      padding: 15px 10px;
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
      position: relative;
      transition: all 0.2s ease-in-out;
      span {
        z-index: 1;
      }
      .icon {
        width: 12px;
        height: 12px;
        z-index: 1;
        transition: inherit;
      }
    }
    .module-progress-prev {
      padding: 0 10px 0 20px;
      background: linear-gradient(90deg, #e0e0e0, #e0e0e0);
      .icon {
        margin-right: 5px;
      }
    }
    .module-progress-next {
      justify-content: flex-end;
      background: linear-gradient(270deg, #e0e0e0, #e0e0e0);
      padding: 0 20px 0 10px;
      .icon {
        margin-left: 5px;
      }
    }
    .module-progress-prev:not(.disabled):hover {
      padding-left: 15px;
      background: linear-gradient(90deg, #f6f6f6, #e0e0e0);
      // border: 1px solid @primary-color;
      .icon {
        margin-right: 10px;
      }
    }
    .module-progress-next:not(.disabled):hover {
      background: linear-gradient(270deg, #f6f6f6, #e0e0e0);
      padding-right: 15px;
      .icon {
        margin-left: 10px;
      }
    }
    .module-progress-prev.disabled,
    .module-progress-next.disabled {
      cursor: not-allowed;
      color: #c0c0c0;
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
  .module-download-box {
    border-radius: 12px;
    // background: @primary-back-color;
    // box-shadow: 7px 7px 12px #e0e0e0, -7px -7px 12px #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: @primary-back-color;
    overflow: hidden;
    .module-download-box-body {
      background: @primary-back-color;
      padding: 20px;
      box-shadow: 0 0 5px #cdcdcd;
    }
    .download {
      font-size: 24px;
    }
    .module-file {
      // border: 1px solid @border-color;
      // background: #f6f6f6;
      // box-shadow: inset 3px 3px 5px #eaeaea, inset -3px -3px 5px #ffffff;
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
      margin: 20px;
      padding: 0 40px;
      transition: all 0.2s ease-in-out;
      color: #ffffff;
      background: @primary-color;
      position: relative;
      overflow: hidden;
    }
    .module-download-button::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      border-radius: 21px;
      transition: all 0.2s ease-in;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2));
    }
    .module-download-button:hover::before {
      left: 0;
    }
    .module-download-button::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      border-radius: 21px;
      transition: all 0.2s ease-in 0.2s;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2));
    }
    .module-download-button:hover::after {
      left: 0;
    }
  }
}
</style>
