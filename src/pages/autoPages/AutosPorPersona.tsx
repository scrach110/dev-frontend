import { useNavigate } from 'react-router-dom';
import { AutoModel } from '../../model/AutoModel';
import { BorrarAutoButton } from '../../helps/BorrarAutoButton';

interface Props {
    autos: AutoModel[];
    onRefresh: () => void;
}

export const AutosPorPersona: React.FC<Props> = ({ autos, onRefresh }) => {
    const navigate = useNavigate();

    return (
        <div>
            {autos.length > 0 ? (
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Año</th>
                            <th>Patente</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autos.map((auto) => (
                            <tr key={auto.id}>
                                <td>{auto.marca}</td>
                                <td>{auto.modelo}</td>
                                <td>{auto.año}</td>
                                <td>{auto.patente}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                        onClick={() => navigate(`/auto/${auto.id}/edit`)}
                                    >
                                        Editar
                                    </button>
                                    <BorrarAutoButton idAuto={auto.id} onDeleteSuccess={onRefresh} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No hay plata para autos</p>
            )}
        </div>
    );
};
