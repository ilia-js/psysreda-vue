import { isTestEnvironment } from "../helpers";

export default (context, inject) => {
  // This function send notification to telegram
  const telegram = (text) => {
    console.log("%c%s", "color: green", "Send with telegram:");
    console.log("%c%s", "color: brown", text);
    const url = new URL("/public/telegram");
    const params = {
      text: text,
      mode: isTestEnvironment() ? "test" : "prod",
    };
    url.search = new URLSearchParams(params).toString();
    fetch(url);
  };
  inject("telegram", telegram);
};
