import axios from "axios";

const api = axios.create({
  baseURL: "https://page-pulse-backend-618k.onrender.com/api",
});

export default api;