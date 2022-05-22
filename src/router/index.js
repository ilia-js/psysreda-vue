import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTES } from "@/settings/routes";
// import { LOCAL_STORAGE_TOKEN_FIELD } from "@/settings/auth";
import Index from "@/views/Index.vue";
import ArtTherapyGroup from "@/views/ArtTherapyGroup";
import Price from "@/views/Price";
import Documents from "@/views/Documents";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME,
    name: "home",
    component: Index,
  },
  {
    path: ROUTES.ART_THERAPY_GROUP,
    name: "art_therapy_group",
    component: ArtTherapyGroup,
  },
  {
    path: ROUTES.PRICE,
    name: "price",
    component: Price,
  },
  {
    path: ROUTES.DOCUMENTS,
    name: "documents",
    component: Documents,
  },
  // {
  //   path: ROUTES.PRIVATE_ZONE,
  //   name: "privateZone",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/PrivateZone.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// eslint-disable-next-line no-unused-vars
// router.beforeEach(async (to, from, next) => {
//   if (
//     to.path !== ROUTES.HOME &&
//     !localStorage.getItem(LOCAL_STORAGE_TOKEN_FIELD)
//   ) {
//     return next(ROUTES.HOME);
//   }
//   return next();
// });

router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || "Татьяна Гвоздовская - психотерапевт";
  });
});

export default router;
