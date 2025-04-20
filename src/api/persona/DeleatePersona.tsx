import { PersonaApi } from '../apiBase/PersonaApi';

export const DeleatePersona = async (idPersona: string) => {
    const response = await PersonaApi.delete(`/${idPersona}`);

    return response.status;
};
