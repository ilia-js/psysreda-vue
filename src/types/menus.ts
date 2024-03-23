import type { AppRoute } from "@/settings/appRoutes";

export interface MenuOption {
  route: AppRoute;
  label: string;
  disabled?: boolean;
}
