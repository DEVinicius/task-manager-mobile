import axios from "axios";

export const TASK_API = axios.create({
  baseURL: `http://localhost:3000`,
});
