import { appRoutes } from "@/settings/appRoutes";
import type { MenuOption } from "@/types/menus";

export const topMenuTabs: MenuOption[] = [
  {
    label: "Главная",
    route: appRoutes.home,
  },
  {
    label: "Гештальт-подход",
    route: appRoutes.gestalt,
  },
  {
    label: "Консультации",
    route: appRoutes.consultations,
  },
  {
    label: "Образование",
    route: appRoutes.education,
  },
];
