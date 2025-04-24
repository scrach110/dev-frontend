import { AutoCompleto } from '../../model/AutoCompleto';
import { AutoApi } from '../apiBase/AutoApi';

export const AddAuto = async (auto: AutoCompleto) => {
    const response = await AutoApi.post('', {
        modelo: auto.modelo,
        marca: auto.marca,
        color: auto.color,
        patente: auto.patente,
        numeroDeChasis: auto.numeroDeChasis,
        año: auto.año,
        idPersona: auto.idPersona,
        motor: auto.motor
    });
    console.log(auto);

    return response;
};
