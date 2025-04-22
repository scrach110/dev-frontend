import { useRef } from 'react';
import PersonaCompleta from '../../model/PersonaCompleta';
import { AddPersona } from '../../api/persona/AddPersona';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

export const AgregarPersonaPage = () => {
    const navigate = useNavigate();

    const nombreRef = useRef<HTMLInputElement>(null);
    const apellidoRef = useRef<HTMLInputElement>(null);
    const dniRef = useRef<HTMLInputElement>(null);
    const fechaRef = useRef<HTMLInputElement>(null);
    const generoRef = useRef<HTMLSelectElement>(null);

    const hadnlerButtonGuardar = async () => {
        if (
            !(
                nombreRef.current!.value &&
                apellidoRef.current!.value &&
                dniRef.current!.value &&
                fechaRef.current!.value &&
                generoRef.current!.value
            )
        ) {
            alert('Complete los campos');
        } else {
            const persona: PersonaCompleta = {
                nombre: nombreRef.current!.value,
                apellido: apellidoRef.current!.value,
                dni: dniRef.current!.value,
                genero: generoRef.current!.value,
                fechaDeNacimiento: fechaRef.current!.value,
                autos: []
            };

            const response = await AddPersona(persona);

            if (response.status === 201 || response.status === 200) {
                navigate('/persona/all');
            } else {
                alert('algo falló');
            }
        }
    };

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            hadnlerButtonGuardar();
        }
    };

    return (
        <div className="container pt-5 my-5 text-center">
            <div className="container-formulario">
                <h2>Agregar Persona</h2>
                <form>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Nombre
                            <input type="text" ref={nombreRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Apellido
                            <input type="text" ref={apellidoRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            DNI
                            <input type="text" ref={dniRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Fecha de Nacimiento
                            <input type="date" ref={fechaRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-4 text-start">
                        <label className="form-label">
                            Género
                            <select ref={generoRef} className="form-control">
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="no-binario">No binario</option>
                            </select>
                        </label>
                    </div>
                    <button type="button" onClick={hadnlerButtonGuardar} className="btn btn-dark w-100">
                        Guardar
                    </button>
                </form>
            </div>
            <Navbar />
        </div>
    );
};
