import { PersonaModel } from '../../model/personaModel';
import { PersonaRow } from './PersonaRow';

export const PersonaLista: React.FC<{ personas: PersonaModel[] }> = ({ personas }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                </tr>
            </thead>
            <tbody>
                {personas.map((p) => (
                    <PersonaRow key={p.DNI} persona={p} />
                ))}
            </tbody>
        </table>
    );
};
