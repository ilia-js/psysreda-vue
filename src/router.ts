import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { localRoutes } from '@/settings/localRoutes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: localRoutes.home,
      name: 'home',
      component: HomeView
    }
    // {
    //   path: ROUTES.ART_THERAPY_GROUP,
    //   name: "art_therapy_group",
    //   component: ArtTherapyGroup,
    // },
    // {
    //   path: ROUTES.PRICE,
    //   name: "price",
    //   component: Price,
    // },
    // {
    //   path: ROUTES.DOCUMENTS,
    //   name: "documents",
    //   component: Documents,
    // },
  ]
})

// TODO
// router.afterEach((to) => {
//   Vue.nextTick(() => {
//     document.title = to.meta.title || "Татьяна Гвоздовская - психотерапевт";
//   });
// });
