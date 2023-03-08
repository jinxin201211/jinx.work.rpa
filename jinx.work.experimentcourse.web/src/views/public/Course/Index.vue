<template>
  <jinx-layout-plain>
    <div class="course-title jinx-title"><span v-text="course.title"></span></div>

    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="课程详情" name="introduce"> <div v-html="course.introduce"></div></el-tab-pane>
      <el-tab-pane label="浏览课程" name="browse">
        <div class="module-cards">
          <div class="card jinx-soft-flat" v-for="(item, index) in course.modules" @click="$router.push('/course/module')">
            <div class="header"></div>
            <div class="content">
              <div class="title"><span v-text="item.title"></span></div>
            </div>
            <div class="footer">
              <span>浏览</span>
              <jinx-icon-svg icon="arrow-right" clazz="icon"></jinx-icon-svg>
            </div>
          </div>
          <div class="card placeholder"></div>
          <div class="card placeholder"></div>
        </div>
        <div class="experiment-cards">
          <div class="card jinx-soft-flat" v-for="(item, index) in course.experiments" @click="$router.push('/course/experiment')">
            <div class="header"><span v-text="'实验' + (index + 1)"></span></div>
            <div class="content">
              <div class="title"><span v-text="item.title"></span></div>
            </div>
            <div class="footer">
              <span>浏览</span>
              <jinx-icon-svg icon="arrow-right" clazz="icon"></jinx-icon-svg>
            </div>
          </div>
          <div class="card placeholder"></div>
          <div class="card placeholder"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </jinx-layout-plain>
</template>

<script setup>
import JinxLayoutPlain from "../components/JinxLayoutPlain.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import test from "../../../javascripts/test";

const $router = useRouter();

let activeTab = ref("introduce");

const course = test.course;
</script>

<style lang="less" scoped>
.course-title {
  margin: 20px 0;
}

.jinx-layout {
  :deep(.el-tabs__item) {
    font-size: 20px;
  }
  :deep(.el-tabs__content) {
    overflow: initial;
  }
  :deep(.el-tabs__nav-wrap::after) {
    display: none;
  }
  :deep(.el-tabs__header) {
    margin-bottom: 20px;
  }
}

.module-cards,
.experiment-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card {
  width: calc((100% - 40px) / 3);
  margin-bottom: 20px;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 12px;
  // background: @primary-back-color;
  // box-shadow: 5px 5px 12px #eaeaea, -5px -5px 12px #ffffff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .header {
    color: @primary-color;
    font-size: 14px;
  }
  .content {
    border-bottom: 1px solid @border-color;
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
  }
  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 80px;
    height: 30px;
    background: @primary-color;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 12px 0 0 0;
    transition: all 0.2s ease-in-out;
    span {
      color: #f1f1f1;
      font-size: 14px;
      margin-left: 16px;
    }
    .icon {
      width: 12px;
      height: 12px;
      margin-left: 8px;
      transition: all 0.2s ease-in-out;
    }
  }
}
.card:hover {
  .footer {
    background: #101010;
    .icon {
      margin-left: 12px;
    }
  }
}
.card.placeholder {
  opacity: 0;
  visibility: hidden;
  margin: 0;
  padding: 0;
  height: 0;
}
</style>
