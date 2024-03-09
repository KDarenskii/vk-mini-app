import axios from "axios";

export const ageApi = axios.create({ baseURL: "https://api.agify.io" })