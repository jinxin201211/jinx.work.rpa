import { defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import global from "../javascripts/global.variable";

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/public/Authentication/Login.vue"),
    meta: {
      keepAlive: true,
      title: "登录",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/public/Home.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/course",
    name: "Course",
    component: () => import("../views/public/Course/Index.vue"),
    meta: {
      keepAlive: true,
      title: "已授权课程",
    },
  },
  {
    path: "/course/module",
    name: "CourseModule",
    component: () => import("../views/public/Course/CourseModule.vue"),
    meta: {
      keepAlive: true,
      title: "实验详情",
    },
  },
  {
    path: "/course/experiment",
    name: "CourseExperiment",
    component: () => import("../views/public/Course/Experiment.vue"),
    meta: {
      keepAlive: true,
      title: "实验详情",
    },
  },
  {
    path: "/course/experiment/module",
    name: "CourseExperimentModule",
    component: () => import("../views/public/Course/ExperimentModule.vue"),
    meta: {
      keepAlive: true,
      title: "实验详情",
    },
  },
  {
    path: "/courselist",
    name: "CourseList",
    component: () => import("../views/public/Course/List.vue"),
    meta: {
      keepAlive: true,
      menu: "course",
      title: "所有课程",
    },
  },
  {
    path: "/class",
    name: "Class",
    component: () => import("../views/public/Class/Index.vue"),
    meta: {
      keepAlive: true,
      menu: "class",
    },
  },
  {
    path: "/helpcenter",
    name: "HelpCenter",
    component: () => import("../views/public/HelpCenter/Index.vue"),
    meta: {
      keepAlive: true,
      menu: "helpcenter",
      title: "帮助中心",
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title + " - " + global.$SiteName;
  }

  next();
});

export default router;
