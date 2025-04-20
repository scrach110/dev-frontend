import { useState } from 'react';
import { DeleatePersona } from '../api/persona/DeleatePersona';

interface Props {
    idPersona: string;
    onDeleteSuccess: () => void;
}

export const BorrarPersonaButton: React.FC<Props> = ({ idPersona, onDeleteSuccess }) => {
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    const handleBorrarClick = () => {
        setMostrarConfirmacion(true);
    };

    const handleCancelar = () => {
        setMostrarConfirmacion(false);
    };

    const handleConfirmar = async () => {
        const status = await DeleatePersona(idPersona);
        if (status === 200 || status === 204) {
            onDeleteSuccess();
        }
        setMostrarConfirmacion(false);
    };

    return (
        <>
            <button className="borrar-button" onClick={handleBorrarClick}>
                Borrar
            </button>

            {mostrarConfirmacion && (
                <div className="popup-confirmacion">
                    <p>¿Estás seguro que deseas borrar esta persona?</p>
                    <button onClick={handleConfirmar}>Sí, borrar</button>
                    <button onClick={handleCancelar}>Cancelar</button>
                </div>
            )}
        </>
    );
};
