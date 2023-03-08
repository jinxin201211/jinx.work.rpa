import axios from "axios";
import GLOBAL from "./global.variable.js";

axios.interceptors.request.use(
  (config) => {
    if (!config.url.startsWith("/")) {
      config.url = "/" + config.url;
    }
    config.url = config.url.replace("/api", GLOBAL.$RequestBaseUrl);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
