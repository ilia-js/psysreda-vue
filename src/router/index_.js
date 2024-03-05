import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTES } from "@/settings/routes.js";
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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "Татьяна Гвоздовская - психотерапевт";
  });
});

export default router;
