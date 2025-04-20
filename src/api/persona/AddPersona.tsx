import PersonaCompleta from '../../model/PersonaCompleta';
import { PersonaApi } from '../apiBase/PersonaApi';

export const AddPersona = async (persona: PersonaCompleta) => {
    const response = await PersonaApi.post('', {
        nombre: persona.nombre,
        apellido: persona.apellido,
        dni: persona.dni,
        fechaDeNacimiento: persona.fechaDeNacimiento,
        genero: persona.genero,
        autos: persona.autos
    });
    return response;
};
