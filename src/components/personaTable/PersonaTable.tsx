import { useNavigate } from 'react-router-dom';
import { PersonaModel } from '../../model/PersonaModel';
import { PersonaRow } from './PersonaRow';

export const PersonaTable: React.FC<{ personas: PersonaModel[]; onDelete: () => void }> = ({ personas, onDelete }) => {
    const navigate = useNavigate();

    const agregarButtonHandler = () => {
        navigate('/persona/add');
    };

    return (
        <div className="persona-container">
            <div className="persona-header">
                <h2>Lista de Personas</h2>
                <button className="boton-verde" onClick={agregarButtonHandler}>
                    Agregar Persona
                </button>
            </div>
            <table className="persona-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((p) => (
                        <PersonaRow key={p.DNI} persona={p} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
