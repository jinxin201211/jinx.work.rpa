<template>
  <jinx-layout-plain>
    <div class="course-list">
      <div class="course-box" v-for="(item, index) in listCourse" :style="{ 'background-image': 'url(\'' + item.img + '\')' }" @click="$router.push('/course')">
        <div class="img"></div>
        <div class="title" v-text="item.name"></div>
        <div class="mask"></div>
      </div>
    </div>
  </jinx-layout-plain>
</template>

<script setup>
import JinxLayoutPlain from "../components/JinxLayoutPlain.vue";
import { useRouter } from "vue-router";

const $router = useRouter();

const listCourse = [
  {
    name: "经济大数据自动化机器人",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "旅游大数据机器人",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "RPA学习资料",
    img: "",
  },
  {
    name: "金融大数据自动化机器人",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "电商大数据自动化机器人",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "人力资源数智化机器人",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "市场营销大数据机器人",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "物流大数据机器人实验",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
  {
    name: "Rpa财务机器人",
    img: "https://rpa.shapanyun.com/products/%E7%94%B5%E5%95%86%E5%A4%A7%E6%95%B0%E6%8D%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E6%9C%BA%E5%99%A8%E4%BA%BA/cover/cover.jpg",
  },
];
</script>

<style lang="less" scoped>
.course-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;

  .course-box {
    width: calc((100% - 40px) / 3);
    height: 260px;
    background-color: #6655e1;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    .title {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      line-height: 30px;
      color: #ffffff;
      font-weight: 700;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
