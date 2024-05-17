import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://supremepraiz.pythonanywhere.com`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
