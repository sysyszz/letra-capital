import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Hero from "../Componentes/Hero";
import Informacion from "../Componentes/Informacion";
import "../Estilos/Home.css";

const Home = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Hero />
            <Informacion />

            {/* Botones dinámicos */}
            <section className="cta-section">
                {user ? (
                    <button 
                        className="btn btn-primary" 
                        onClick={() => navigate("/dashboard")}
                    >
                        Ir al Dashboard
                    </button>
                ) : (
                    <div className="btn-group">
                        <button 
                            className="btn btn-secondary" 
                            onClick={() => navigate("/login")}
                        >
                            Iniciar Sesión
                        </button>
                        <button 
                            className="btn btn-primary" 
                            onClick={() => navigate("/registro")}
                        >
                            Registrarse
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;