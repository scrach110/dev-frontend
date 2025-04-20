import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
                ⬅ Volver al Home
            </Link>
        </nav>
    );
};
