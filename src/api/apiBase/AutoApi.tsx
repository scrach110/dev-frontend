import axios from 'axios';

const AutoApi = axios.create({
    baseURL: 'http://localhost:3000/auto',
    withCredentials: true
});

export { AutoApi };
