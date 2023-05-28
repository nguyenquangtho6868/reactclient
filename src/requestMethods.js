import axios from "axios";

const BASE_URL = "https://project-clien.onrender.com/api";

const TOKEN = localStorage.getItem("login")
  ? [JSON.parse(localStorage.getItem("login")).accessToken]
  : [];
console.log(TOKEN[0]);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN[0] },
});
