import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveToken, deleteToken, getToken } from "./token";

const API_BASE_URL =
  "https://react-native-food-delivery-be.eapi.joincoded.com/api";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

// Add an interceptor to automatically include the Bearer token if it exists
instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error adding token to headers:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
