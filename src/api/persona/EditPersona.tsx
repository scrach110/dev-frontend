import PersonaCompleta from '../../model/PersonaCompleta';
import { PersonaApi } from '../apiBase/PersonaApi';

export const EditPersona = async (idPersona: string, personaEdit: PersonaCompleta) => {
    const data = await PersonaApi.put(`/${idPersona}`, {
        id: personaEdit.id,
        nombre: personaEdit.nombre,
        apellido: personaEdit.apellido,
        dni: personaEdit.dni,
        fechaDeNacimiento: personaEdit.fechaDeNacimiento,
        genero: personaEdit.genero,
        donanteOrganos: personaEdit.donanteOrganos,
        autos: personaEdit.autos
    });

    console.log(data.status);

    return data;
};
