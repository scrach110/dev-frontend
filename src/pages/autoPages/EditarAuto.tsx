import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AutoById } from '../../api/auto/AutoById';
import { EditAuto } from '../../api/auto/EditAuto';
import { AutoCompleto } from '../../model/AutoCompleto';

export const EditarAuto = () => {
    const { id } = useParams<{ id: string }>();
    const idAuto = String(id);
    const navigate = useNavigate();

    const [autoOriginal, setAutoOriginal] = useState<AutoCompleto | null>(null);

    const marcaRef = useRef<HTMLInputElement>(null);
    const modeloRef = useRef<HTMLInputElement>(null);
    const añoRef = useRef<HTMLInputElement>(null);
    const patenteRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<HTMLInputElement>(null);
    const chasisRef = useRef<HTMLInputElement>(null);
    const motorRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchAuto = async () => {
            const data = await AutoById(idAuto);
            setAutoOriginal(data);
        };
        fetchAuto();
    }, [idAuto]);

    if (!autoOriginal) {
        return <p>Cargando datos del auto...</p>;
    }

    const handleGuardar = async () => {
        const autoEditado: AutoCompleto = {
            ...autoOriginal,
            marca: marcaRef.current?.value || '',
            modelo: modeloRef.current?.value || '',
            año: Number(añoRef.current?.value) || 0,
            patente: patenteRef.current?.value || '',
            color: colorRef.current?.value || '',
            numeroDeChasis: chasisRef.current?.value || '',
            motor: motorRef.current?.value || ''
        };

        const response = await EditAuto(idAuto, autoEditado);
        if (response.status === 200) {
            navigate(`/auto/${idAuto}`);
        } else {
            alert('Algún dato está mal ingresado.');
        }
    };

    return (
        <div className="container text-center border p-4 mt-5">
            <h2>Editar Auto</h2>
            <form>
                <div className="mb-3">
                    <label>Marca</label>
                    <input className="form-control" defaultValue={autoOriginal.marca} ref={marcaRef} />
                </div>
                <div className="mb-3">
                    <label>Modelo</label>
                    <input className="form-control" defaultValue={autoOriginal.modelo} ref={modeloRef} />
                </div>
                <div className="mb-3">
                    <label>Año</label>
                    <input className="form-control" type="number" defaultValue={autoOriginal.año} ref={añoRef} />
                </div>
                <div className="mb-3">
                    <label>Patente</label>
                    <input className="form-control" defaultValue={autoOriginal.patente} ref={patenteRef} />
                </div>
                <div className="mb-3">
                    <label>Color</label>
                    <input className="form-control" defaultValue={autoOriginal.color} ref={colorRef} />
                </div>
                <div className="mb-3">
                    <label>Número de Chasis</label>
                    <input className="form-control" defaultValue={autoOriginal.numeroDeChasis} ref={chasisRef} />
                </div>
                <div className="mb-3">
                    <label>Motor</label>
                    <input className="form-control" defaultValue={autoOriginal.motor} ref={motorRef} />
                </div>

                <button type="button" className="btn btn-success" onClick={handleGuardar}>
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
};
