import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    const handlerButtonPersona = async () => {
        navigate('/persona/all');
    };

    const handlerButtonAuto = async () => {
        navigate('/autos');
    };

    return (
        <>
            <h1>Estás en el HOME</h1>
            <div>
                <button type="button" onClick={handlerButtonPersona}>
                    Personas
                </button>
                <button type="button" onClick={handlerButtonAuto}>
                    Autos
                </button>
            </div>
        </>
    );
};
