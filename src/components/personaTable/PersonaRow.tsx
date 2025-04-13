import React from 'react';
import { PersonaModel } from '../../model/personaModel';

export const PersonaRow: React.FC<{ persona: PersonaModel }> = ({ persona }) => {
    return (
        <tr>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{persona.DNI}</td>
        </tr>
    );
};
