import { AutoModel } from '../../model/AutoModel';
import { AutoRow } from './AutoRow';

export const AutoTable: React.FC<{ autos: AutoModel[] }> = ({ autos }) => {
    return (
        <>
            <table>
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
                    {autos.map((a) => (
                        <AutoRow key={a.patente} auto={a} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
