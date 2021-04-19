import axios from "axios";

const port = "3344";

const api = axios.create({
  baseURL: `http://localhost:${port}/items`,
});

export default api;
