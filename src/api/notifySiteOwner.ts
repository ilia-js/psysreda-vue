import { apiRequest } from "@/api/apiRequest";
import { isTestEnvironment } from "@/helpers/utils";
import { apiRoutes } from "@/settings/api";

export const notifySiteOwner = async (message: string) => {
  await apiRequest({
    path: apiRoutes.telegramProcessor,
    data: {
      text: message,
      mode: isTestEnvironment() ? "test" : "prod",
    },
  });
};
