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
    console.log(error);
    if (error.response)
      return { error: error.response.data, status: error.response.status };

    return { error: "Lost connection to the server" };
  }
);

export { httpService };
