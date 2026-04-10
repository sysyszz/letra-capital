import { useState, useEffect } from 'react';
import LibrosForm from '../Componentes/LibrosForm';
import LibrosTabla from '../Componentes/LibrosTabla';
import { getLibros, addLibro, updateLibro, deleteLibro } from '../../Services/librosService';
import { IconBook, IconPlus, IconX } from '../../Componentes/Icons';
import './LibrosPage.css';

const LibrosPage = () => {
    const [libros, setLibros] = useState([]);
    const [libroEditar, setLibroEditar] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const cargar = () => setLibros(getLibros());
    useEffect(() => { cargar(); }, []);

    const handleGuardar = (form) => {
        if (libroEditar) {
            updateLibro(libroEditar.id, form);
            setLibroEditar(null);
            setShowForm(false);
        } else {
            addLibro(form);
        }
        cargar();
    };

    const handleEditar = (libro) => {
        setLibroEditar(libro);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleEliminar = (id) => {
        if (window.confirm('¿Estás seguro de eliminar este libro?')) {
            deleteLibro(id);
            cargar();
        }
    };

    const handleCancelar = () => {
        setLibroEditar(null);
        setShowForm(false);
    };

    return (
        <div className="modulo-container">
            <div className="modulo-header">
                <h2 className="modulo-titulo-wrap">
                    <IconBook size={32} aria-hidden />
                    Gestión de libros
                </h2>
                <button type="button" className="btn-toggle" onClick={() => { setShowForm(!showForm); setLibroEditar(null); }}>
                    {showForm ? (
                        <>
                            <IconX size={18} aria-hidden />
                            Cerrar
                        </>
                    ) : (
                        <>
                            <IconPlus size={18} aria-hidden />
                            Nuevo libro
                        </>
                    )}
                </button>
            </div>

            {(showForm || libroEditar) && (
                <LibrosForm onGuardar={handleGuardar} libroEditar={libroEditar} onCancelar={handleCancelar} />
            )}

            <div className="modulo-stats">
                <span>Total libros: <strong>{libros.length}</strong></span>
                <span>En stock: <strong>{libros.filter(l => Number(l.stock) > 0).length}</strong></span>
            </div>

            <LibrosTabla libros={libros} onEditar={handleEditar} onEliminar={handleEliminar} />
        </div>
    );
};

export default LibrosPage;
