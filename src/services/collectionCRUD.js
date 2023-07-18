import { axios } from "@/services";

export const getDesiredCollection = (user, query) =>
  axios.get(`/api/collection/${user}`, { params: { ...query } });