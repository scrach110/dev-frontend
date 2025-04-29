import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AutoCompleto } from '../../model/AutoCompleto';
import { AutoById } from '../../api/auto/AutoById';
import { BorrarAutoButton } from '../../helps/BorrarAutoButton';

export const AutoValue = () => {
    const { id } = useParams<{ id: string }>();
    const idAuto = String(id);
    const [auto, setAuto] = useState<AutoCompleto | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuto = async () => {
            const data = await AutoById(idAuto);
            setAuto(data);
        };
        fetchAuto();
    }, [idAuto]);

    const VerDueñoHandler = () => {
        navigate(`/persona/${auto?.idPersona}`);
    };

    const BorrarAutoHandler = () => {
        navigate('/autos');
    };

    const EditarAutoHandler = () => {
        navigate(`/auto/${auto?.id}/edit`);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Detalles del Auto</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Campo</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Marca</td>
                        <td>{auto?.marca}</td>
                    </tr>
                    <tr>
                        <td>Modelo</td>
                        <td>{auto?.modelo}</td>
                    </tr>
                    <tr>
                        <td>Año</td>
                        <td>{auto?.año}</td>
                    </tr>
                    <tr>
                        <td>Patente</td>
                        <td>{auto?.patente}</td>
                    </tr>
                    <tr>
                        <td>Motor</td>
                        <td>{auto?.motor}</td>
                    </tr>
                    <tr>
                        <td>Número de chasis</td>
                        <td>{auto?.numeroDeChasis}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>{auto?.color}</td>
                    </tr>
                </tbody>
            </table>

            <button type="button" className="btn btn-secondary" onClick={VerDueñoHandler}>
                Ver Dueño
            </button>
            <button type="button" className="btn btn-warning" onClick={EditarAutoHandler}>
                Editar
            </button>
            <BorrarAutoButton idAuto={idAuto} onDeleteSuccess={BorrarAutoHandler} />
        </div>
    );
};
