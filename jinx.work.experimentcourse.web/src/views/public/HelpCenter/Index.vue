<template>
  <jinx-layout :wide="true">
    <template #sidebar>
      <div class="jinx-help-menu">
        <template v-for="(group, index) in listHelpCenter">
          <div class="title" :class="{ active: indexGroup === index }"><span v-text="group.title"></span></div>
          <ul>
            <li class="" v-for="(help, index2) in group.children" :class="{ active: indexGroup === index && indexHelp === index2 }" v-text="help.title" @click="handleHelpChange(index, index2)"></li>
          </ul>
        </template>
      </div>
    </template>
    <template #default>
      <div class="jinx-help-content">
        <div class="title" v-text="currentTitle"></div>
        <component :is="currentComponent"></component>
      </div>
    </template>
  </jinx-layout>
</template>

<script setup>
import JinxLayout from "../components/JinxLayout.vue";
import { onMounted, markRaw, reactive, ref } from "vue";
import UiPathDownload from "./components/UiPathDownload.vue";
import UiPathInstall from "./components/UiPathInstall.vue";
import UiPathActivation from "./components/UiPathActivation.vue";
import UiPathRun from "./components/UiPathRun.vue";
import UiPathUpload from "./components/UiPathUpload.vue";
import TableauDownload from "./components/TableauDownload.vue";
import TableauInstall from "./components/TableauInstall.vue";
import OpeningQuestion from "./components/OpeningQuestion.vue";
import SpecifiedQuestion from "./components/SpecifiedQuestion.vue";
import { useRoute } from "vue-router";

const listHelpCenter = [
  {
    title: "UiPath",
    children: [
      {
        title: "UiPath 在哪儿下载？",
        component: markRaw(UiPathDownload),
        key: "uipathdownload",
      },
      {
        title: "UiPath 如何安装？",
        component: markRaw(UiPathInstall),
        key: "uipathinstall",
      },
      {
        title: "UiPath 登录激活",
        component: markRaw(UiPathActivation),
        key: "uipathactivation",
      },
      {
        title: "UiPath 怎么运行现有项目源代码？",
        component: markRaw(UiPathRun),
        key: "uipathrun",
      },
      {
        title: "UiPath 怎么上传数据？",
        component: markRaw(UiPathUpload),
        key: "uipathupload",
      },
    ],
  },
  {
    title: "Tableau",
    children: [
      {
        title: "Tableau 在哪儿下载？",
        component: markRaw(TableauDownload),
        key: "tableaudownload",
      },
      {
        title: "Tableau 如何安装？",
        component: markRaw(TableauInstall),
        key: "tableauinstall",
      },
    ],
  },
  {
    title: "评分规则参考",
    children: [
      {
        title: "开放式命题",
        component: markRaw(OpeningQuestion),
        key: "openingquestion",
      },
      {
        title: "指定命题",
        component: markRaw(SpecifiedQuestion),
        key: "specifiedquestion",
      },
    ],
  },
];

let indexGroup = ref(0);
let indexHelp = ref(0);

let currentComponent = reactive(listHelpCenter[0].children[0].component);
let currentTitle = ref(listHelpCenter[0].children[0].title);

const handleHelpChange = (gindex, hindex) => {
  indexGroup.value = gindex;
  indexHelp.value = hindex;
  currentComponent = listHelpCenter[gindex].children[hindex].component;
  currentTitle.value = listHelpCenter[gindex].children[hindex].title;
};

const $route = useRoute();
onMounted(() => {
  let key = $route.query.k;
  let gindex = 0;
  let hindex = 0;
  if (key) {
    let match = false;
    for (let i = 0; i < listHelpCenter.length; i++) {
      for (let j = 0; j < listHelpCenter[i].children.length; j++) {
        if (listHelpCenter[i].children[j].key === key) {
          gindex = i;
          hindex = j;
          match = true;
          break;
        }
        if (match) {
          break;
        }
      }
    }
  }
  handleHelpChange(gindex, hindex);
});
</script>

<style lang="less" scoped>
.jinx-help-menu {
  width: 300px;
  padding: 20px;
  border-right: 1px solid @border-color;

  .title {
    span {
      position: relative;
      display: inline-block;
      font-size: 16px;
      font-weight: 400;
      color: #999;
      line-height: 38px;
    }
    span::after {
      content: " ";
      width: 100%;
      max-width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: transparent;
    }
  }

  .title.active {
    span::after {
      background-color: @primary-color;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    li {
      padding: 10px 0;
      font-size: 16px;
      line-height: 25px;
      cursor: pointer;
      color: #333;
    }

    li.active {
      color: @primary-color;
      font-size: 18px;
    }
  }
}

.jinx-help-content {
  overflow-y: auto;
  padding: 0 20px;
  flex: 1;

  .title {
    position: relative;
    display: inline-block;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    padding: 10px 0 20px;
    color: #333;
  }
  .title::after {
    content: " ";
    width: 75px;
    max-width: 100%;
    height: 1px;
    background-color: @primary-color;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
