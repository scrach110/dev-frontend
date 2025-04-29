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
            <div className="d-flex gap-4 justify-content-center mt-4">
                <div className="card" style={{ width: '18rem' }}>
                    <img
                        className="card-img-top"
                        src="/images/personaHome.jpg"
                        alt=""
                        style={{ width: '300px', height: '300px', objectFit: 'cover', backgroundColor: '#C7C7C7' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Personas</h5>
                        <p className="card-text">Clickea para acceder a las Personas</p>
                        <button type="button" class="btn btn-primary btn-lg" onClick={handlerButtonPersona}>
                            Personas
                        </button>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img
                        src="/images/vergilAuto.jpg"
                        className="card-img-top"
                        alt=""
                        style={{ width: '300px', height: '300px', objectFit: 'cover', backgroundColor: '#C7C7C7' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Autos</h5>
                        <p className="card-text">Clickea para acceder a los Autos</p>
                        <button type="button" class="btn btn-primary btn-lg" onClick={handlerButtonAuto}>
                            Autos
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
