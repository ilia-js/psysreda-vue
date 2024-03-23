import { createRouter, createWebHistory } from "vue-router";

import { appRoutes } from "@/settings/appRoutes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.values(appRoutes).map((item) => item),
});

// TODO
// router.afterEach((to) => {
//   Vue.nextTick(() => {
//     document.title = to.meta.title || "Татьяна Гвоздовская - психотерапевт";
//   });
// });
