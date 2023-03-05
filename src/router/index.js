import { defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/public/Home.vue"),
    meta: {
      keepAlive: true,
    },
  },
  ,
  {
    path: "/course",
    name: "Course",
    component: () => import("../views/public/Course/Index.vue"),
    meta: {
      keepAlive: true,
      menu: "course",
    },
  },
  ,
  {
    path: "/class",
    name: "Class",
    component: () => import("../views/public/Class/Index.vue"),
    meta: {
      keepAlive: true,
      menu: "class",
    },
  },
  ,
  {
    path: "/helpcenter",
    name: "HelpCenter",
    component: () => import("../views/public/HelpCenter/Index.vue"),
    meta: {
      keepAlive: true,
      menu: "helpcenter",
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

export default router;
