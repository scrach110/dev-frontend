import { PersonaModel } from '../../model/PersonaModel';
import { PersonaApi } from '../apiBase/PersonaApi';

const allPersona = async () => {
    const response = await PersonaApi.get('/all');

    const personas: PersonaModel[] = response.data.map((persona: PersonaModel) => ({
        id: persona.id,
        nombre: persona.nombre,
        apellido: persona.apellido,
        DNI: persona.DNI
    }));
    return personas;
};

export default allPersona;
