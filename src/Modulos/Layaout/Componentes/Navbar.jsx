import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="app-navbar">
            <div className="nav-inner">
                <Link to="/" className="nav-brand">
                    Letra Capital
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <Link to="/dashboard">Panel</Link>
                            </li>
                            <li>
                                <Link to="/libros">Libros</Link>
                            </li>
                            <li>
                                <Link to="/clientes">Clientes</Link>
                            </li>
                            <li>
                                <Link to="/ventas">Ventas</Link>
                            </li>
                            <li>
                                <button type="button" className="nav-btn-logout" onClick={handleLogout}>
                                    Cerrar sesión
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">Iniciar sesión</Link>
                            </li>
                            <li>
                                <Link to="/registro">Registrarse</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
