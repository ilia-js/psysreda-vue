import ConsultationsView from "@/views/ConsultationsView.vue";
import EducationView from "@/views/EducationView.vue";
import GestaltView from "@/views/GestaltView.vue";
import HomeView from "@/views/HomeView.vue";

export interface AppRoute {
  path: string;
  name: string;
  component?: unknown;
}

export const appRoutes: Record<string, AppRoute> = {
  home: {
    path: "/",
    name: "home",
    component: HomeView,
  },
  gestalt: {
    path: "/gestalt",
    name: "gestalt",
    component: GestaltView,
  },
  consultations: {
    path: "/consultations",
    name: "consultations",
    component: ConsultationsView,
  },
  education: {
    path: "/education",
    name: "education",
    component: EducationView,
  },
};
