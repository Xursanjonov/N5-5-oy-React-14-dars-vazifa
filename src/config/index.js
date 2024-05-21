import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "https://dummyjson.com",
});
