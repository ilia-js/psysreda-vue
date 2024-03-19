export const clientConnectionTypes = {
  connectOnline: "Онлайн связь",
  connectOnlineAfterTest: "Онлайн связь после прохождения теста",
  enrollArtTherapyGroup: "Запись на арт-терапевтическую группу",
};

export const appTabs = [
  {
    path: "/",
    label: "Главная",
  },
  {
    path: "/art-therapy-group",
    label: "Арт-Терапевтическая группа",
  },
  {
    path: "/course",
    label: 'Курс "Океан Эмоций"',
    disabled: true,
  },
  {
    path: "/price",
    label: "Стоимость",
  },
  {
    path: "/documents",
    label: "Подтверждение образования",
  },
];

export const socialNetworks = [
  {
    link: "https://www.facebook.com/psysreda",
    icon: "mdi-facebook",
    color: "#4267B2",
  },
  {
    link: "https://www.instagram.com/mypsyholog",
    icon: "mdi-instagram",
    color: "#e95950",
  },
];
