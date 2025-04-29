import { AutoModel } from './AutoModel';

type PersonaCompleta = {
    id?: string;
    nombre: string;
    apellido: string;
    dni: string;
    fechaDeNacimiento: string;
    genero: string;
    donanteOrganos: boolean;
    autos: AutoModel[];
};

export default PersonaCompleta;
