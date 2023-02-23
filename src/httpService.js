import axios from "axios";
import { aguilaClient } from "./util.js";

export const loggedInUser = JSON.parse(sessionStorage.getItem(aguilaClient));
const httpService = axios.create({
  baseURL: `${window.location.origin.replace(":3000", ":4000")}/api/v1/`,
  timeout: 10000,
  withCredentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // if (error.response.status === 401) {
    //   sessionStorage.removeItem(aguilaClient);
    //   window.location.reload();
    // }
    return { error: error.response.data };
  }
);

export { httpService };
