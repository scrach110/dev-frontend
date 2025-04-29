import React from 'react';
import { PersonaModel } from '../../model/PersonaModel';
import { useNavigate } from 'react-router-dom';
import { BorrarPersonaButton } from '../../helps/BorrarPersonaButton';

export const PersonaRow: React.FC<{ persona: PersonaModel; onDelete: () => void }> = ({ persona, onDelete }) => {
    const navigate = useNavigate();

    const verButtonHandler = () => {
        navigate(`/persona/${persona.id}`);
    };

    const editarButtonHandler = () => {
        navigate(`/persona/${persona.id}/edit`);
    };

    return (
        <tr>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{persona.DNI}</td>
            <button type="button" class="btn btn-success" onClick={verButtonHandler}>
                Ver
            </button>
            <button type="button" class="btn btn-warning" onClick={editarButtonHandler}>
                Editar
            </button>
            <BorrarPersonaButton idPersona={persona.id} onDeleteSuccess={onDelete} />
        </tr>
    );
};
