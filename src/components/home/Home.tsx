import { useState } from 'react';
import allPersona from '../../api/persona/allPersonas';
import { PersonaModel } from '../../model/personaModel';
import { PersonaLista } from '../personaTable/PersonaLista';
import { AutoModel } from '../../model/AutoModel';
import allAutos from '../../api/auto/AllAutos';
import { AutoTable } from '../autoTable/AutoTable';

export const Home = () => {
    const [personas, setPersonas] = useState<PersonaModel[]>([]);
    const [autos, setAutos] = useState<AutoModel[]>([]);

    const handlerButtonPersona = async () => {
        const personas = await allPersona();
        console.log(personas);

        setPersonas(personas);
        setAutos([]);
    };

    const handlerButtonAuto = async () => {
        const autos = await allAutos();
        console.log(autos);

        setAutos(autos);
        setPersonas([]);
    };

    return (
        <>
            <h1>Estás en el HOME</h1>
            <div>
                <button type="button" onClick={handlerButtonPersona}>
                    Personas
                </button>
                <button type="button" onClick={handlerButtonAuto}>
                    Autos
                </button>
                {personas.length > 0 && <PersonaLista personas={personas} />}
                {autos.length > 0 && <AutoTable autos={autos} />}
            </div>
        </>
    );
};
