import axios from "axios";
const systemAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  // baseURL: process.env.VUE_APP_API_TEST_URL,
  timeout: 0, // 0 for no timeout
  headers: { "Content-Type": "application/json" },
  // withCredentials: true,
  // crossDomain: true,
});
export { systemAxios }