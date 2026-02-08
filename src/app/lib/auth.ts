export const saveToken = (token: string) => {
  localStorage.setItem("webberry_token", token);
};

export const getToken = () => {
  return localStorage.getItem("webberry_token");
};

export const removeToken = () => {
  localStorage.removeItem("webberry_token");
};
