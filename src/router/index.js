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
