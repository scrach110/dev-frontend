import axios from 'axios';

const AutoApi = axios.create({
    baseURL: 'http://localhost:3000/autos',
    withCredentials: true
});

export { AutoApi };
