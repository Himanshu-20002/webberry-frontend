import { apiFetch } from "./api";

export const getSettings = async () => {
  const res = await apiFetch("/settings");
  return res.data;
};
