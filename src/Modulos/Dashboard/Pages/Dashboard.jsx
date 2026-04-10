import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getLibros } from '../../Services/librosService';
import { getClientes } from '../../Services/clientesService';
import { getVentas } from '../../Services/VentasService';
import { IconBook, IconUsers, IconClipboardList, IconWallet } from '../../Componentes/Icons';
import { formatMoneyDisplay } from '../../utils/formatMoney';
import './Dashboard.css';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const libros = getLibros();
    const clientes = getClientes();
    const ventas = getVentas();
    const totalIngresos = ventas.reduce((acc, v) => acc + Number(v.total || 0), 0);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const modulos = [
        { Icon: IconBook, titulo: 'Libros', descripcion: 'Gestiona el catálogo', count: libros.length, label: 'libros registrados', ruta: '/libros' },
        { Icon: IconUsers, titulo: 'Clientes', descripcion: 'Administra compradores', count: clientes.length, label: 'clientes registrados', ruta: '/clientes' },
        { Icon: IconClipboardList, titulo: 'Ventas', descripcion: 'Historial de ventas', count: ventas.length, label: 'ventas realizadas', ruta: '/ventas' },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-bienvenida">Bienvenido, <span>{user?.nombre}</span></h1>
                    <p className="dashboard-subtitle">Panel de control — Letra Capital</p>
                </div>
                <button type="button" className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <span className="stat-icon" aria-hidden>
                        <IconBook size={28} />
                    </span>
                    <div>
                        <p className="stat-number">{libros.length}</p>
                        <p className="stat-label">Libros en catálogo</p>
                    </div>
                </div>
                <div className="stat-card">
                    <span className="stat-icon" aria-hidden>
                        <IconUsers size={28} />
                    </span>
                    <div>
                        <p className="stat-number">{clientes.length}</p>
                        <p className="stat-label">Clientes registrados</p>
                    </div>
                </div>
                <div className="stat-card">
                    <span className="stat-icon" aria-hidden>
                        <IconClipboardList size={28} />
                    </span>
                    <div>
                        <p className="stat-number">{ventas.length}</p>
                        <p className="stat-label">Ventas realizadas</p>
                    </div>
                </div>
                <div className="stat-card highlight">
                    <span className="stat-icon" aria-hidden>
                        <IconWallet size={28} />
                    </span>
                    <div>
                        <p className="stat-number">{formatMoneyDisplay(totalIngresos)}</p>
                        <p className="stat-label">Ingresos totales</p>
                    </div>
                </div>
            </div>

            <h2 className="dashboard-section-title">Módulos del sistema</h2>
            <div className="dashboard-modulos">
                {modulos.map((m) => {
                    const ModIcon = m.Icon;
                    return (
                        <div
                            key={m.ruta}
                            role="button"
                            tabIndex={0}
                            className="modulo-card"
                            onClick={() => navigate(m.ruta)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    navigate(m.ruta);
                                }
                            }}
                        >
                            <div className="modulo-card-icon">
                                <ModIcon size={30} />
                            </div>
                            <h3>{m.titulo}</h3>
                            <p>{m.descripcion}</p>
                            <span className="modulo-card-count">{m.count} {m.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Dashboard;
