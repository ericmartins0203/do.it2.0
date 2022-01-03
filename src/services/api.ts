import axios from "axios";

export const api = axios.create({
  baseURL: "https://doit2-eric.herokuapp.com/",
});
