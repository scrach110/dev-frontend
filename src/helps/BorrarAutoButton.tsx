import { useState } from 'react';
import { DeleateAuto } from '../api/auto/DeleateAuto';

interface Props {
    idAuto: string;
    onDeleteSuccess: () => void;
}

export const BorrarAutoButton: React.FC<Props> = ({ idAuto, onDeleteSuccess }) => {
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    const handleBorrarClick = () => {
        setMostrarConfirmacion(true);
    };

    const handleCancelar = () => {
        setMostrarConfirmacion(false);
    };

    const handleConfirmar = async () => {
        const status = await DeleateAuto(idAuto);
        if (status === 200 || status === 204) {
            onDeleteSuccess();
        }
        setMostrarConfirmacion(false);
    };

    return (
        <>
            <button type="button" class="btn btn-danger" onClick={handleBorrarClick}>
                Borrar
            </button>

            {mostrarConfirmacion && (
                <div className="popup-confirmacion">
                    <p>¿Estás seguro que deseas borrar éste auto?</p>
                    <button onClick={handleConfirmar}>Sí, borrar</button>
                    <button onClick={handleCancelar}>Cancelar</button>
                </div>
            )}
        </>
    );
};
