import axios from "axios";

const portaApi = '5242';

<<<<<<< HEAD
const ip = '192.168.68.110';
=======
const ip = '172.16.39.106';
//ip Senai 172.16.39.106
//ip Pedro 192.168.255.11
>>>>>>> 7d24018a20a32e92c633e8506df7f53e221db4d5

const apiUrlLocal = `http://${ip}:${portaApi}/api`;

const api = axios.create({
    baseURL : apiUrlLocal
});

export default api


//Teste commit develop 