import axios from "axios";

const API = axios.create({
  baseURL: "https://fashion-store-personalized.onrender.com/api",
});

export default API;