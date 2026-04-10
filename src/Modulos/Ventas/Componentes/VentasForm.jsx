import { useState, useEffect } from 'react';
import { getLibros } from '../../Services/librosService';
import { getClientes } from '../../Services/clientesService';
import { IconPencil, IconPlus } from '../../Componentes/Icons';
import { formatMoney, formatMoneyDisplay } from '../../utils/formatMoney';
import './VentasForm.css';

const VentasForm = ({ onGuardar, ventaEditar, onCancelar }) => {
    const [form, setForm] = useState({ clienteId: '', libroId: '', cantidad: 1, fecha: '' });
    const [libros, setLibros] = useState([]);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        setLibros(getLibros());
        setClientes(getClientes());
        const hoy = new Date().toISOString().split('T')[0];
        if (ventaEditar) setForm(ventaEditar);
        else setForm({ clienteId: '', libroId: '', cantidad: 1, fecha: hoy });
    }, [ventaEditar]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const libro = libros.find(l => l.id === Number(form.libroId));
        const cliente = clientes.find(c => c.id === Number(form.clienteId));
        const raw = libro ? Number(libro.precio) * Number(form.cantidad) : 0;
        const total = Number(formatMoney(raw));
        onGuardar({ ...form, librTitulo: libro?.titulo, clienteNombre: cliente?.nombre, total });
        if (!ventaEditar) {
            const hoy = new Date().toISOString().split('T')[0];
            setForm({ clienteId: '', libroId: '', cantidad: 1, fecha: hoy });
        }
    };

    return (
        <form className="modulo-form" onSubmit={handleSubmit}>
            <h3 className="form-title">
                {ventaEditar ? (
                    <>
                        <IconPencil size={20} aria-hidden />
                        Editar venta
                    </>
                ) : (
                    <>
                        <IconPlus size={20} aria-hidden />
                        Nueva venta
                    </>
                )}
            </h3>
            <div className="form-grid">
                <div className="form-group">
                    <label>Cliente</label>
                    <select name="clienteId" value={form.clienteId} onChange={handleChange} required>
                        <option value="">Selecciona un cliente</option>
                        {clientes.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label>Libro</label>
                    <select name="libroId" value={form.libroId} onChange={handleChange} required>
                        <option value="">Selecciona un libro</option>
                        {libros.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.titulo} — {formatMoneyDisplay(l.precio)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Cantidad</label>
                    <input name="cantidad" type="number" min="1" value={form.cantidad} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input name="fecha" type="date" value={form.fecha} onChange={handleChange} required />
                </div>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn-primary">{ventaEditar ? 'Actualizar' : 'Registrar Venta'}</button>
                {ventaEditar && <button type="button" className="btn-secondary" onClick={onCancelar}>Cancelar</button>}
            </div>
        </form>
    );
};

export default VentasForm;
