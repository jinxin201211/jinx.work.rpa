<template>
  <jinx-layout-plain>
    <div class="course-title"><span v-text="course.title"></span></div>

    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="课程详情" name="introduce"> <div v-html="course.introduce"></div></el-tab-pane>
      <el-tab-pane label="浏览课程" name="browse">
        <div class="module-cards">
          <div class="card" v-for="(item, index) in course.modules">
            <div class="header"></div>
            <div class="content">
              <div class="title"><span v-text="item.title"></span></div>
            </div>
            <div class="footer">
              <el-link @click="$router.push('/course/module')">浏览</el-link>
            </div>
          </div>
          <div class="card placeholder"></div>
          <div class="card placeholder"></div>
        </div>
        <div class="experiment-cards">
          <div class="card" v-for="(item, index) in course.experiments">
            <div class="header"><span v-text="'实验' + (index + 1)"></span></div>
            <div class="content">
              <div class="title"><span v-text="item.title"></span></div>
            </div>
            <div class="footer">
              <el-link @click="$router.push('/course/experiment')">浏览</el-link>
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
  font-size: 24px;
  // line-height: 40px;
  margin: 20px 0;
}

.jinx-layout {
  :deep(.el-tabs__item) {
    font-size: 20px;
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
  border-radius: 6px;
  background: @primary-back-color;
  box-shadow: inset 5px 5px 5px #c7c7c7, inset -5px -5px 5px #ffffff;

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
    display: flex;
    justify-content: flex-end;
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
