import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PersonaById } from '../../api/persona/PersonaById';
import { EditPersona } from '../../api/persona/EditPersona';
import PersonaCompleta from '../../model/PersonaCompleta';
import { Navbar } from '../../components/Navbar';

export const EditarPersonaPage = () => {
    const { id } = useParams<{ id: string }>();
    const personaId = String(id);
    const navigate = useNavigate();

    const [personaOriginal, setPersonaOriginal] = useState<PersonaCompleta | null>(null);

    const nombreRef = useRef<HTMLInputElement>(null);
    const apellidoRef = useRef<HTMLInputElement>(null);
    const dniRef = useRef<HTMLInputElement>(null);
    const fechaRef = useRef<HTMLInputElement>(null);
    const generoRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        const fetchPersona = async () => {
            const data = await PersonaById(personaId);
            setPersonaOriginal(data);
        };
        fetchPersona();
    }, [personaId]);

    if (!personaOriginal) {
        return <p>Cargando datos...</p>;
    }

    const handleGuardar = async () => {
        const personaEditada: PersonaCompleta = {
            ...personaOriginal,
            nombre: nombreRef.current?.value || '',
            apellido: apellidoRef.current?.value || '',
            dni: dniRef.current?.value || '',
            fechaDeNacimiento: fechaRef.current?.value || '',
            genero: generoRef.current?.value || ''
        };

        const response = await EditPersona(personaId, personaEditada);
        if (response.status === 201) {
            navigate(`/persona/${personaId}`);
        } else {
            alert('algun dato está mal ingresado');
        }
    };

    const formatDate = (fecha: string) => fecha.split('T')[0];

    return (
        <div className="container text-center border p-4 mt-5">
            <h2>Editar Persona</h2>
            <form>
                <div className="mb-3">
                    <label>Nombre</label>
                    <input className="form-control" type="text" defaultValue={personaOriginal.nombre} ref={nombreRef} />
                </div>

                <div className="mb-3">
                    <label>Apellido</label>
                    <input
                        className="form-control"
                        type="text"
                        defaultValue={personaOriginal.apellido}
                        ref={apellidoRef}
                    />
                </div>

                <div className="mb-3">
                    <label>DNI</label>
                    <input className="form-control" type="text" defaultValue={personaOriginal.dni} ref={dniRef} />
                </div>

                <div className="mb-3">
                    <label>Fecha de Nacimiento</label>
                    <input
                        className="form-control"
                        type="date"
                        defaultValue={formatDate(personaOriginal.fechaDeNacimiento)}
                        ref={fechaRef}
                    />
                </div>

                <div className="mb-3">
                    <label>Género</label>
                    <select className="form-control" defaultValue={personaOriginal.genero} ref={generoRef}>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="no-binario">No-binario</option>
                    </select>
                </div>

                <button type="button" className="btn btn-success" onClick={handleGuardar}>
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
};
