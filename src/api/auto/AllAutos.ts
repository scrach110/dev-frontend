import { AutoModel } from '../../model/AutoModel';
import { AutoApi } from '../apiBase/AutoApi';

const allAutos = async () => {
    const response = await AutoApi.get('');

    const autos: AutoModel[] = response.data.map((auto: AutoModel) => ({
        marca: auto.marca,
        modelo: auto.modelo,
        año: auto.año,
        patente: auto.patente
    }));
    return autos;
};

export default allAutos;
