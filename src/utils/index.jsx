/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

import { API_URL } from "@/constant";
const instance = axios.create({
  baseURL: API_URL,
  timeout: 100000,
});

// This is executed before any request is sent
instance.interceptors.request.use((config) => {
  config.headers["Expires"] = "0";
  config.headers["Access-Control-Allow-Origin"] = "no-cors";

  return config;
});

// This is executed before it reaches the calling end
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common error responses globally here
    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        toast.error("API URL IS NOT ACCURATE");
      } else if (status === 401) {
        localStorage.clear();
        sessionStorage.clear();
        if (window.location.pathname !== "/admin/login") {
          window.location.href = "/admin/login";
        }
        toast.error("Login failed. Please check your credentials.");
      } else if (status === 400) {
        toast.error("Already Exists");
      } else if (error.code === "ECONNABORTED") {
        toast.error("Request timed out");
      } else if (!error.response) {
        toast.error("No internet access");
      }
      return Promise.reject(error);
    }
  }
);
const getRequest = (API, body) => instance.get(API, body);

const postRequest = (API, body) => instance.post(API, body);

const putRequest = (API, body) => instance.put(API, body);
const deleteRequest = (API, body) => instance.delete(API, body);

export default {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};

// helperAPI
