import PersonaCompleta from '../../model/PersonaCompleta';
import { PersonaApi } from '../apiBase/PersonaApi';

export const PersonaById = async (idPersona: string) => {
    const response = await PersonaApi.get(`/${idPersona}`);

    console.log(response.data);

    const persona: PersonaCompleta = {
        id: response.data.id,
        nombre: response.data.nombre,
        apellido: response.data.apellido,
        DNI: response.data.dni,
        fechaDeNacimiento: response.data.fechaDeNacimiento,
        genero: response.data.genero,
        autos: response.data.autos
    };

    return persona;
};
