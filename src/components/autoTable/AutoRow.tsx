import React from 'react';
import { AutoModel } from '../../model/AutoModel';
import { useNavigate } from 'react-router-dom';
import { BorrarAutoButton } from '../../helps/BorrarAutoButton';

export const AutoRow: React.FC<{ auto: AutoModel; onDeleate: () => void }> = ({ auto, onDeleate }) => {
    const navigate = useNavigate();

    const VerDueñoHandler = () => {
        navigate(`/persona/${auto.idPersona}`);
    };

    const VerAutoHandler = () => {
        navigate(`/auto/${auto.id}`);
    };

    const EditarAutoHandler = () => {
        navigate(`/auto/${auto.id}/edit`);
    };

    return (
        <tr>
            <td>{auto.marca}</td>
            <td>{auto.modelo}</td>
            <td>{auto.año}</td>
            <td>{auto.patente}</td>
            <button type="button" class="btn btn-success" onClick={VerAutoHandler}>
                Ver
            </button>
            <button type="button" class="btn btn-warning" onClick={EditarAutoHandler}>
                Editar
            </button>
            <button type="button" class="btn btn-secondary" onClick={VerDueñoHandler}>
                Ver dueño
            </button>
            <BorrarAutoButton idAuto={auto.id} onDeleteSuccess={onDeleate} />
        </tr>
    );
};
