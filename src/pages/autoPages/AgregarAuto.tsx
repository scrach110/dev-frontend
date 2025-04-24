import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AutoCompleto } from '../../model/AutoCompleto';
import { AddAuto } from '../../api/auto/AddAuto';

export const AgregarAuto = () => {
    const { id } = useParams<{ id: string }>();
    const idPersona = String(id);
    const navigate = useNavigate();

    const modeloRef = useRef<HTMLInputElement>(null);
    const marcaRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<HTMLInputElement>(null);
    const patenteRef = useRef<HTMLInputElement>(null);
    const motorRef = useRef<HTMLInputElement>(null);
    const chasisRef = useRef<HTMLInputElement>(null);
    const añoRef = useRef<HTMLInputElement>(null);

    const handlerButtonGuardar = async () => {
        if (
            !(
                modeloRef.current?.value &&
                marcaRef.current?.value &&
                colorRef.current?.value &&
                patenteRef.current?.value &&
                marcaRef.current?.value &&
                motorRef.current?.value &&
                chasisRef.current?.value &&
                añoRef.current?.value
            )
        ) {
            alert('Complete los campos');
        } else {
            const auto: AutoCompleto = {
                modelo: modeloRef.current?.value,
                marca: marcaRef.current?.value,
                color: colorRef.current?.value,
                patente: patenteRef.current?.value,
                motor: motorRef.current?.value,
                numeroDeChasis: chasisRef.current?.value,
                año: Number(añoRef.current?.value),
                idPersona: idPersona
            };
            const response = await AddAuto(auto);

            if (response.status === 201 || response.status === 200) {
                navigate(`/persona/${idPersona}`);
            } else {
                alert('algo falló');
            }
        }
    };

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handlerButtonGuardar();
        }
    };
    return (
        <div className="container pt-5 my-5 text-center">
            <div className="container-formulario">
                <h2>Agregar Auto</h2>
                <form>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Marca
                            <input type="text" ref={marcaRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Modelo
                            <input type="text" ref={modeloRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Color
                            <input type="text" ref={colorRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Patente
                            <input type="text" ref={patenteRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Motor
                            <input type="text" ref={motorRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Numero de chasis
                            <input type="text" ref={chasisRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">
                            Año
                            <input type="number" ref={añoRef} className="form-control" onKeyUp={handleKeyUp} />
                        </label>
                    </div>
                    <button type="button" onClick={handlerButtonGuardar} className="btn btn-dark w-100">
                        {' '}
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};
