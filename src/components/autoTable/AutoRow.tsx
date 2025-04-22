import React from 'react';
import { AutoModel } from '../../model/AutoModel';
import { useNavigate } from 'react-router-dom';

export const AutoRow: React.FC<{ auto: AutoModel }> = ({ auto }) => {
    const navigate = useNavigate();

    const VerDueñoHandler = () => {
        navigate(`/persona/${auto.idPersona}`);
    };

    const VerAutoHandler = () => {};

    const EditarAutoHandler = () => {};

    return (
        <tr>
            <td>{auto.marca}</td>
            <td>{auto.modelo}</td>
            <td>{auto.año}</td>
            <td>{auto.patente}</td>
            <button className="boton-verde" onClick={VerAutoHandler}>
                Ver
            </button>
            <button className="editar-button" onClick={EditarAutoHandler}>
                Editar
            </button>
            <button className="eliminar-button">Eliminar</button>
            <button className="dueño-button" onClick={VerDueñoHandler}>
                Ver dueño
            </button>
        </tr>
    );
};
