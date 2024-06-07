import axios from "axios";

const portaApi = '5242';

const ip = '172.16.39.106';

const apiUrlLocal = `http://${ip}:${portaApi}/api`;

const api = axios.create({
    baseURL : apiUrlLocal
});

export default api