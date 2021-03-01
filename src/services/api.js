import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('@token'),
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
});

export default api;