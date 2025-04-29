import { AutoCompleto } from '../../model/AutoCompleto';
import { AutoApi } from '../apiBase/AutoApi';

export const EditAuto = async (idAuto: string, autoEdit: AutoCompleto) => {
    const data = await AutoApi.put(`/${idAuto}`, {
        id: autoEdit.id,
        color: autoEdit.color,
        año: autoEdit.año,
        idPersona: autoEdit.idPersona,
        marca: autoEdit.marca,
        modelo: autoEdit.modelo,
        motor: autoEdit.motor,
        patente: autoEdit.patente,
        numeroDeChasis: autoEdit.numeroDeChasis
    });

    console.log(data.status);

    return data;
};
