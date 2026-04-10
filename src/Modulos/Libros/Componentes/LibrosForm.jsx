import { useState, useEffect } from 'react';
import { IconPencil, IconPlus } from '../../Componentes/Icons';
import './LibrosForm.css';

const LibrosForm = ({ onGuardar, libroEditar, onCancelar }) => {
    const [form, setForm] = useState({ titulo: '', autor: '', genero: '', precio: '', stock: '' });

    useEffect(() => {
        if (libroEditar) setForm(libroEditar);
        else setForm({ titulo: '', autor: '', genero: '', precio: '', stock: '' });
    }, [libroEditar]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuardar(form);
        if (!libroEditar) setForm({ titulo: '', autor: '', genero: '', precio: '', stock: '' });
    };

    return (
        <form className="modulo-form" onSubmit={handleSubmit}>
            <h3 className="form-title">
                {libroEditar ? (
                    <>
                        <IconPencil size={20} aria-hidden />
                        Editar libro
                    </>
                ) : (
                    <>
                        <IconPlus size={20} aria-hidden />
                        Nuevo libro
                    </>
                )}
            </h3>
            <div className="form-grid">
                <div className="form-group">
                    <label>Título</label>
                    <input name="titulo" placeholder="Ej: Cien años de soledad" value={form.titulo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Autor</label>
                    <input name="autor" placeholder="Ej: Gabriel García Márquez" value={form.autor} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Género</label>
                    <input name="genero" placeholder="Ej: Novela, Ciencia ficción..." value={form.genero} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Precio (COP)</label>
                    <input name="precio" type="number" min="0" step="1" placeholder="0" value={form.precio} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input name="stock" type="number" min="0" placeholder="0" value={form.stock} onChange={handleChange} required />
                </div>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn-primary">{libroEditar ? 'Actualizar' : 'Agregar Libro'}</button>
                {libroEditar && <button type="button" className="btn-secondary" onClick={onCancelar}>Cancelar</button>}
            </div>
        </form>
    );
};

export default LibrosForm;