<template>
  <jinx-layout :wide="true">
    <template #sidebar>
      <div class="module-navbar">
        <div class="course-title"><span v-text="course.title"></span></div>
        <div class="module-header"><span>实验模块</span></div>
        <ul class="module-menu">
          <li v-for="(item, index) in course.modules" :class="{ active: moduleIndex === index }" @click="handleChangeModule(index)">
            <jinx-icon-svg icon="pdf" clazz="icon" v-if="item.type === 'pdf'"></jinx-icon-svg>
            <jinx-icon-svg icon="code" clazz="icon" v-else></jinx-icon-svg>
            <span v-text="item.title"></span>
          </li>
        </ul>
      </div>
    </template>
    <template #default>
      <div class="module-iframe">
        <iframe :src="pdf"></iframe>
      </div>
    </template>
  </jinx-layout>
</template>

<script setup>
import JinxLayout from "../components/JinxLayout.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import globalVariable from "../../../javascripts/global.variable";

const $router = useRouter();

let moduleIndex = ref(0);

const course = {
  title: "经济大数据自动化机器人",
  modules: [
    {
      title: "简介-经济大数据自动化机器人实验系统",
      resource: "",
      type: "pdf",
    },
    {
      title: "教学大纲-经济大数据机器人系统",
      resource: "",
      type: "pdf",
    },
  ],
  experiments: [
    {
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
    },
    {
      title: "旅游热荐数据分析机器人",
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
      ],
    },
    {
      title: "地方政府采购招标抓取机器人",
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
      ],
    },
    {
      title: "金融风险声誉数据机器人",
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
      ],
    },
    {
      title: "用户画像数据分析机器人",
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
      ],
    },
  ],
};

let pdf = ref(globalVariable.$PdfViewerPath + course.modules[0].resource);

const handleChangeModule = (index) => {
  if (index !== moduleIndex.value) {
    moduleIndex.value = index;
    pdf.value = globalVariable.$PdfViewerPath + course.modules[index].resource;
  }
};
</script>

<style lang="less" scoped>
.module-navbar {
  padding: 0 20px;
  .course-title {
    font-size: 24px;
    font-weight: 400;
    margin: 20px 0;
  }
  .module-header {
    font-size: 20px;
    padding: 10px 0;
    border-bottom: 1px solid @border-color;
    color: @primary-color;
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
</style>
