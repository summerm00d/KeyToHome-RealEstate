import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});

export default apiRequest;