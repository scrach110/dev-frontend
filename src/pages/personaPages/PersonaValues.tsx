import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PersonaCompleta from '../../model/PersonaCompleta';
import { PersonaById } from '../../api/persona/PersonaById';
import { BorrarPersonaButton } from '../../helps/BorrarPersonaButton';
import { AutosPorPersona } from '../autoPages/AutosPorPersona';

export const PersonaValues = () => {
    const { id } = useParams<{ id: string }>();
    const idPersona = String(id);
    const [persona, setPersona] = useState<PersonaCompleta | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPersona = async () => {
            const data = await PersonaById(idPersona);
            setPersona(data);
        };
        fetchPersona();
    }, [idPersona]);

    const EditarPersonaHandler = () => {
        navigate(`/persona/${idPersona}/edit`);
    };

    const DeletePersonaHandler = () => {
        navigate('/persona/all');
    };

    const AgregarAutoHandler = () => {
        navigate(`/auto/add/${idPersona}`);
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="titulo">Detalles de la Persona</h2>
                <button type="button" class="btn btn-warning" onClick={EditarPersonaHandler}>
                    Editar
                </button>
                <BorrarPersonaButton idPersona={idPersona} onDeleteSuccess={DeletePersonaHandler} />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Campo</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody class="trable-group-divider">
                        <tr>
                            <td>Nombre</td>
                            <td>{persona?.nombre}</td>
                        </tr>
                        <tr>
                            <td>Apellido</td>
                            <td>{persona?.apellido}</td>
                        </tr>
                        <tr>
                            <td>DNI</td>
                            <td>{persona?.dni}</td>
                        </tr>
                        <tr>
                            <td>Fecha de Nacimiento</td>
                            <td>{new Date(persona?.fechaDeNacimiento).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td>Género</td>
                            <td>{persona?.genero}</td>
                        </tr>
                        <tr>
                            <td>Donante de Organos</td>
                            <td>{persona?.donanteOrganos ? 'Sí' : 'No'}</td>
                        </tr>
                        <tr>
                            <td>Autos</td>
                            <td>
                                {persona && (
                                    <AutosPorPersona
                                        autos={persona.autos}
                                        onRefresh={async () => {
                                            const updated = await PersonaById(idPersona);
                                            setPersona(updated);
                                        }}
                                    />
                                )}
                            </td>
                            <button type="button" class="btn btn-success" onClick={AgregarAutoHandler}>
                                Agregar Auto
                            </button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
