import { AutoModel } from '../../model/AutoModel';
import axios from 'axios';

const autosBack = axios.create({
    baseURL: 'http://localhost:3000/autos',
    withCredentials: true
});

const allAutos = async () => {
    const response = await autosBack.get('');

    const autos: AutoModel[] = response.data.map((auto: AutoModel) => ({
        marca: auto.marca,
        modelo: auto.modelo,
        año: auto.año,
        patente: auto.patente
    }));
    return autos;
};

export default allAutos;
