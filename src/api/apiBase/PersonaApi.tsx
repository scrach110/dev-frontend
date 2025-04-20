import axios from 'axios';

const PersonaApi = axios.create({
    baseURL: 'http://localhost:3000/persona',
    withCredentials: true
});

export { PersonaApi };
