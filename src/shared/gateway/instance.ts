import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  params: { apikey: process.env.NEXT_PUBLIC_API_KEY },
  timeout: 1000,
});
