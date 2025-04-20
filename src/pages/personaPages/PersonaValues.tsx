import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonaCompleta from '../../model/PersonaCompleta';
import { PersonaById } from '../../api/persona/PersonaById';
import { Navbar } from '../../components/Navbar';

export const PersonaValues = () => {
    const { id } = useParams<{ id: string }>();
    const idPersona = String(id);
    const [persona, setPersona] = useState<PersonaCompleta | null>(null);

    useEffect(() => {
        const fetchPersona = async () => {
            const data = await PersonaById(idPersona);
            setPersona(data);
        };
        fetchPersona();
    }, [idPersona]);

    const AgregarAutoHandler = () => {};

    return (
        <>
            <div className="persona-container">
                <h2 className="titulo">Detalles de la Persona</h2>
                <table className="persona-table">
                    <tbody>
                        <tr>
                            <td className="label">Nombre</td>
                            <td>{persona?.nombre}</td>
                        </tr>
                        <tr>
                            <td className="label">Apellido</td>
                            <td>{persona?.apellido}</td>
                        </tr>
                        <tr>
                            <td className="label">DNI</td>
                            <td>{persona?.DNI}</td>
                        </tr>
                        <tr>
                            <td className="label">Fecha de Nacimiento</td>
                            <td>{persona?.fechaDeNacimiento}</td>
                        </tr>
                        <tr>
                            <td className="label">Género</td>
                            <td>{persona?.genero}</td>
                        </tr>
                        <tr>
                            <td className="label">Autos</td>
                            <td>
                                {persona?.autos.length > 0 ? (
                                    <ul>
                                        {persona?.autos.map((auto, index) => (
                                            <li key={index}>
                                                {auto.marca} - {auto.modelo} - {auto.año} - {auto.patente}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    'No hay plata para autos'
                                )}
                            </td>
                        </tr>
                        <h4> Autos </h4>
                        <button onClick={AgregarAutoHandler}> Agregar Auto</button>
                    </tbody>
                </table>
            </div>

            <Navbar />
        </>
    );
};
