import "../Estilos/Informacion.css";

// Iconos SVG minimalistas
const IconoLibro = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6C8 5.44772 8.44772 5 9 5H31C31.5523 5 32 5.44772 32 6V30C32 30.5523 31.5523 31 31 31H9C8.44772 31 8 30.5523 8 30V6Z" stroke="hsl(30, 60%, 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="5" x2="20" y2="31" stroke="hsl(30, 60%, 55%)" strokeWidth="2"/>
    <line x1="8" y1="12" x2="32" y2="12" stroke="hsl(30, 60%, 55%)" strokeWidth="1.5" opacity="0.5"/>
    <line x1="8" y1="18" x2="32" y2="18" stroke="hsl(30, 60%, 55%)" strokeWidth="1.5" opacity="0.5"/>
    <line x1="8" y1="24" x2="32" y2="24" stroke="hsl(30, 60%, 55%)" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

const IconoClientes = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="10" r="4" stroke="hsl(30, 60%, 55%)" strokeWidth="2"/>
    <path d="M8 18C8 15.5 10.2 13.5 13 13.5C15.8 13.5 18 15.5 18 18V22H8V18Z" stroke="hsl(30, 60%, 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="27" cy="10" r="4" stroke="hsl(30, 60%, 55%)" strokeWidth="2"/>
    <path d="M22 18C22 15.5 24.2 13.5 27 13.5C29.8 13.5 32 15.5 32 18V22H22V18Z" stroke="hsl(30, 60%, 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 25C13 23.5 14.1 22 15.5 22H22.5C24 22 25 23.5 25 25V30H13V25Z" stroke="hsl(30, 60%, 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconoVentas = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 28C8 28.5523 8.44772 29 9 29H31C31.5523 29 32 28.5523 32 28V12C32 11.4477 31.5523 11 31 11H9C8.44772 11 8 11.4477 8 12V28Z" stroke="hsl(30, 60%, 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8V11" stroke="hsl(30, 60%, 55%)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 8V11" stroke="hsl(30, 60%, 55%)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 15H28" stroke="hsl(30, 60%, 55%)" strokeWidth="1.5"/>
    <path d="M12 19H28" stroke="hsl(30, 60%, 55%)" strokeWidth="1.5"/>
    <path d="M12 23H28" stroke="hsl(30, 60%, 55%)" strokeWidth="1.5"/>
  </svg>
);

const Informacion = () => {
    const caracteristicas = [
        {
            icono: <IconoLibro />,
            titulo: "Catálogo completo",
            descripcion: "Gestiona todos tus libros fácilmente",
            imagen: "https://biblioteca.ulpgc.es/sites/default/files/attachments_files/espacio_violeta/Libros-cat%C3%A1logo-Espacio-Violeta.jpg"
        },
        {
            icono: <IconoClientes />,
            titulo: "Gestión de clientes",
            descripcion: "Mantén el control de tus compradores",
            imagen: "https://www.isdi.education/es/wp-content/uploads/2024/03/4323-shutterstock_13122312712028129.jpg"
        },
        {
            icono: <IconoVentas />,
            titulo: "Registro de ventas",
            descripcion: "Lleva el historial de todas tus ventas",
            imagen: "https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/blog-assets/direct-sales.jpg"
        }
    ];

    return (
        <section className="informacion">
            <h2 className="informacion-title">¿Por qué usar Letra Capital?</h2>
            <div className="caracteristicas-grid">
                {caracteristicas.map((item, index) => (
                    <div key={index} className="card">
                        <div className="card-image" style={{ backgroundImage: `url(${item.imagen})` }}></div>
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <div className="card-icon">{item.icono}</div>
                            <h3 className="card-title">{item.titulo}</h3>
                            <p className="card-description">{item.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Informacion;