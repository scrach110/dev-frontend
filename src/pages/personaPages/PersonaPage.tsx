import { useEffect, useState } from 'react';
import { PersonaModel } from '../../model/PersonaModel';
import allPersona from '../../api/persona/AllPersonas';
import { PersonaTable } from '../../components/personaTable/PersonaTable';
import { Navbar } from '../../components/Navbar';

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
            <PersonaTable personas={personas} onDelete={fetchPersonas} />
            <Navbar />
        </div>
    );
};
