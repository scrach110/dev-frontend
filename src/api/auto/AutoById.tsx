import { AutoCompleto } from "../../model/AutoCompleto";
import { AutoApi } from "../apiBase/AutoApi"


export const AutoById = async(idAuto: number) => {
    const response = await AutoApi.get(`/${idAuto}`);

    const auto: AutoCompleto = {
        id: response.data.id,
        marca: response.data.marca,
        año: response.data.año,
        color: response.data.color,
        modelo: response.data.modelo,
        motor: response.data.motor,
        numeroDeChasis: response.data.numeroDeChasis,
        patente: response.data.patente,
        idPersona: response.data.idPersona
    }

    console.log(auto);
    

    return auto;
}