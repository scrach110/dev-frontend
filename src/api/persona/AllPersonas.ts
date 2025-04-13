import { PersonaModel } from '../../model/personaModel';
import axios from 'axios';

const personaBack = axios.create({
    baseURL: 'http://localhost:3000/personas',
    withCredentials: true
});

const allPersona = async () => {
    const response = await personaBack.get('');

    const personas: PersonaModel[] = response.data.map((persona: PersonaModel) => ({
        nombre: persona.nombre,
        apellido: persona.apellido,
        DNI: persona.DNI
    }));
    return personas;
};

export default allPersona;
