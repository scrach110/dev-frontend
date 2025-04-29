import { AutoModel } from '../../model/AutoModel';
import { AutoRow } from './AutoRow';

export const AutoTable: React.FC<{ autos: AutoModel[]; onDeleate: () => void }> = ({ autos, onDeleate }) => {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Año</th>
                        <th scope="col">Patente</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {autos.map((a) => (
                        <AutoRow key={a.patente} auto={a} onDeleate={onDeleate} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
