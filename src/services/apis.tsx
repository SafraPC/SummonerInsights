import axios from "axios";

export const leagueApi = axios.create({
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "insomnia/8.6.0",
  },
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export const dragonApi = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com/cdn",
  headers: {
    "Content-Type": "application/json",
  },
});
