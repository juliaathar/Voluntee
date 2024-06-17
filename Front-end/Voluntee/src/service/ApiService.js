import axios from "axios";

const portaApi = '5242';

const ip = '192.168.15.105';
//ip Senai 172.16.39.106
//ip Pedro 192.168.255.11

const apiUrlLocal = `http://${ip}:${portaApi}/api`;

const api = axios.create({
    baseURL : apiUrlLocal
});

export default api


//Teste commit develop 