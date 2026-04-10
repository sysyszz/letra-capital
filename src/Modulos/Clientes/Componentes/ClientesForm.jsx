import { useState, useEffect } from 'react';
import { IconPencil, IconPlus } from '../../Componentes/Icons';
import './ClientesForm.css';

const ClientesForm = ({ onGuardar, clienteEditar, onCancelar }) => {
    const [form, setForm] = useState({ nombre: '', email: '', telefono: '', ciudad: '' });

    useEffect(() => {
        if (clienteEditar) setForm(clienteEditar);
        else setForm({ nombre: '', email: '', telefono: '', ciudad: '' });
    }, [clienteEditar]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuardar(form);
        if (!clienteEditar) setForm({ nombre: '', email: '', telefono: '', ciudad: '' });
    };

    return (
        <form className="modulo-form" onSubmit={handleSubmit}>
            <h3 className="form-title">
                {clienteEditar ? (
                    <>
                        <IconPencil size={20} aria-hidden />
                        Editar cliente
                    </>
                ) : (
                    <>
                        <IconPlus size={20} aria-hidden />
                        Nuevo cliente
                    </>
                )}
            </h3>
            <div className="form-grid">
                <div className="form-group">
                    <label>Nombre completo</label>
                    <input name="nombre" placeholder="Ej: Juan Pérez" value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" placeholder="correo@ejemplo.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input name="telefono" placeholder="Ej: 3001234567" value={form.telefono} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Ciudad</label>
                    <input name="ciudad" placeholder="Ej: Bogotá" value={form.ciudad} onChange={handleChange} required />
                </div>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn-primary">{clienteEditar ? 'Actualizar' : 'Agregar Cliente'}</button>
                {clienteEditar && <button type="button" className="btn-secondary" onClick={onCancelar}>Cancelar</button>}
            </div>
        </form>
    );
};

export default ClientesForm;
