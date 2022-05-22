export const isTestEnvironment = () => {
  if (!localStorage) {
    return false;
  } else {
    return localStorage.getItem("test_env") !== null;
  }
};
