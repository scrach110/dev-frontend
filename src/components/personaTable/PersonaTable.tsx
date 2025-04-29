import { useNavigate } from 'react-router-dom';
import { PersonaModel } from '../../model/PersonaModel';
import { PersonaRow } from './PersonaRow';

export const PersonaTable: React.FC<{ personas: PersonaModel[]; onDelete: () => void }> = ({ personas, onDelete }) => {
    const navigate = useNavigate();

    const agregarButtonHandler = () => {
        navigate('/persona/add');
    };

    return (
        <>
            <button type="button" class="btn btn-primary" onClick={agregarButtonHandler}>
                Agregar Persona
            </button>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {personas.map((p) => (
                        <PersonaRow key={p.DNI} persona={p} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
