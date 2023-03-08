<template>
  <jinx-layout>
    <template #sidebar>
      <jinx-sidebar-menu></jinx-sidebar-menu>
    </template>
    <div style="padding: 20px">
      <div class="course-title jinx-title">我的课程</div>
      <div class="course-box" style="width: 100%">
        <div class="course-card jinx-soft-flat" v-for="(item, index) in listUserCourse">
          <img :src="item.img" v-if="item.img" />
          <img :src="defaultCourse" v-else />
          <span class="text" v-text="item.name"></span>
          <div class="button">
            <el-button type="primary" plain>创建班级</el-button>
            <el-button type="primary" plain @click="handleViewCourse">查看课程</el-button>
          </div>
        </div>
      </div>
    </div>
  </jinx-layout>
</template>

<script setup>
import { useRouter } from "vue-router";
import JinxLayout from "../components/JinxLayout.vue";
import JinxSidebarMenu from "../components/JinxSidebarMenu.vue";
import defaultCourse from "@/assets/image-text.png";

const listUserCourse = [
  {
    name: "2023年经济金融大数据师资培训会-金融大数据",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "2023年新商科师资培训-电商与营销主题",
    img: "",
  },
  {
    name: "2023年新商科师资培训-物流类主题",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "金融大数据自动化机器人1.0",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "金融大数据自动化机器人1.0",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "经济大数据自动化机器人1.0",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "经济大数据自动化机器人1.0",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "经济大数据自动化机器人1.0",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "经济大数据自动化机器人1.0",
    img: "https://rpa.shapanyun.com/products/%E9%87%91%E8%9E%8D%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
];

const $router = useRouter();
const handleViewCourse = () => {
  $router.push("/course");
};
</script>

<style lang="less" scoped>
.course-title {
  margin: 0 0 20px 0;
}
.course-box {
  width: 100%;

  .course-card {
    width: 100%;
    margin: 20px 0;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    img {
      height: 60px;
      width: 60px;
    }
    .text {
      flex: 1;
      margin: 0 20px;
    }
  }
  .course-card:last-child {
    margin-bottom: 0;
  }
}
</style>
