import axios from "axios";

const api = axios.create({
  baseURL: "https://quantinent-dev.de.r.appspot.com",
});

export default api;
