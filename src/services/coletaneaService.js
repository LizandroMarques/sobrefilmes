import axios from "axios";

const apiColetanea = axios.create({
  baseURL: process.env.REACT_APP_API_COLETANEA,
});
export default apiColetanea;
