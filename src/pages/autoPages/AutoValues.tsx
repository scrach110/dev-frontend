import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AutoCompleto } from "../../model/AutoCompleto";
import { AutoById } from "../../api/auto/AutoById";

export const AutoValue = () => {

    const { id } = useParams<{ id: string }>();
    const idAuto = Number(id);
    const [auto, setAuto] = useState<AutoCompleto | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuto = async () => {
            const data = await AutoById(idAuto);
            setAuto(data);
        };
        fetchAuto();
    }, [idAuto]);

    const VerDueñoHandler = () =>{
        navigate(`/persona/${auto?.idPersona}`)
    };

    const EliminarAutoHandler = () =>{};

    const EditarAutoHandler = () =>{};

    return (
        <div className="auto-container">
            <h2 className="titulo"> Detalles del auto</h2>
            <div className="auto-table">
                <button className="dueño-button" onClick={VerDueñoHandler}>Ver Dueño</button>
                <button onClick={EliminarAutoHandler}>Eliminar</button>
                <button className="editar-button" onClick={EditarAutoHandler}>Editar</button>
                <tbody>
                    <tr>
                        <td className="label">Marca</td>
                        <td>{auto?.marca}</td>
                    </tr>
                    <tr>
                        <td className="label">Año</td>
                        <td>{auto?.año}</td>
                    </tr>
                    <tr>
                        <td className="label">Patente</td>
                        <td>{auto?.patente}</td>
                    </tr>
                    <tr>
                        <td className="label">Motor</td>
                        <td>{auto?.motor}</td>
                    </tr>
                    <tr>
                        <td className="label"> Numero de chasis</td>
                        <td>{auto?.numeroDeChasis}</td>
                    </tr>
                    <tr>
                        <td className="label">Color</td>
                        <td>{auto?.color}</td>
                    </tr>
                </tbody>
            </div>
        </div>
    );
}