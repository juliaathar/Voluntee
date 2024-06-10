import axios from "axios";

const portaApi = '5242';

const ip = '192.168.68.110';

const apiUrlLocal = `http://${ip}:${portaApi}/api`;

const api = axios.create({
    baseURL : apiUrlLocal
});

export default api