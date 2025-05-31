import axios from "axios";

const api = axios.create({
	baseURL: "https://cadastro-back-end.fly.dev",
});

export default api;
