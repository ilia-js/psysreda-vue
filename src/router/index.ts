import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index.vue";
import ArtTherapyGroup from "@/views/ArtTherapyGroup.vue";
import Price from "@/views/Price.vue";
import Documents from "@/views/Documents.vue";
import { ROUTES } from "@/settings/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
})

export default router
