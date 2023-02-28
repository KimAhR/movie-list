// src/api/tmdbAxios.js
import axios from "axios";

// 공통적으로 적용될 것들을 미리 적용하여 인스턴스 생성.
export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },
});
