import { useEffect, useState } from 'react';
import { PersonaModel } from '../../model/PersonaModel';
import allPersona from '../../api/persona/AllPersonas';
import { PersonaTable } from '../../components/personaTable/PersonaTable';

export const PersonasPage = () => {
    const [personas, setPersonas] = useState<PersonaModel[]>([]);

    const fetchPersonas = async () => {
        const personasData = await allPersona();
        setPersonas(personasData);
    };

    useEffect(() => {
        fetchPersonas();
    }, []);

    return (
        <div>
            <h2>Lista de Personas</h2>
            <PersonaTable personas={personas} onDelete={fetchPersonas} />
        </div>
    );
};
