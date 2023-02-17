import axios from "axios";

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
    return { error: error.response.data };
  }
);

export { httpService };
