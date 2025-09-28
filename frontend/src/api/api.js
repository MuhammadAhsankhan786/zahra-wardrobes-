import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend ka root url
});

// agar token ho (Admin ke liye)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
