<template>
  <div class="jinx-layout jinx-helpcenter">
    <jinx-navbar-menu></jinx-navbar-menu>
    <div class="jinx-layout-body jinx-help">
      <div class="jinx-help-menu">
        <template v-for="(group, index) in ListHelpCenter">
          <div class="title" :class="{ active: GroupIndex === index }"><span v-text="group.title"></span></div>
          <ul>
            <li class="" v-for="(help, index2) in group.children" :class="{ active: GroupIndex === index && HelpIndex === index2 }" v-text="help.title" @click="handleHelpChange(index, index2)"></li>
          </ul>
        </template>
      </div>

      <div class="jinx-help-content">
        <div class="title" v-text="CurrentTitle"></div>
        <component :is="CurrentComponent"></component>
      </div>
    </div>
    <jinx-layout-footer></jinx-layout-footer>
  </div>
</template>

<script setup>
import JinxNavbarMenu from "../components/JinxNavbarMenu.vue";
import JinxLayoutFooter from "../components/JinxLayoutFooter.vue";
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

const ListHelpCenter = [
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

let GroupIndex = ref(0);
let HelpIndex = ref(0);

let CurrentComponent = reactive(ListHelpCenter[0].children[0].component);
let CurrentTitle = ref(ListHelpCenter[0].children[0].title);

const handleHelpChange = (gindex, hindex) => {
  GroupIndex.value = gindex;
  HelpIndex.value = hindex;
  CurrentComponent = ListHelpCenter[gindex].children[hindex].component;
  CurrentTitle.value = ListHelpCenter[gindex].children[hindex].title;
};

const $route = useRoute();
onMounted(() => {
  let key = $route.query.k;
  let gindex = 0;
  let hindex = 0;
  if (key) {
    let match = false;
    for (let i = 0; i < ListHelpCenter.length; i++) {
      for (let j = 0; j < ListHelpCenter[i].children.length; j++) {
        if (ListHelpCenter[i].children[j].key === key) {
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
.jinx-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: @typical-width;
  overflow: hidden;

  .jinx-layout-body {
    flex: 1;
    overflow: hidden;
  }
}
.jinx-helpcenter {
  :deep(.jinx-menu-center) {
    width: 100%;
  }
}

.jinx-help {
  display: flex;

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
}
</style>
