import { useState, useEffect } from 'react';
import ClientesForm from '../Componentes/ClientesForm';
import ClientesTabla from '../Componentes/ClientesTabla';
import { getClientes, addCliente, updateCliente, deleteCliente } from '../../Services/clientesService';
import { IconUsers, IconPlus, IconX } from '../../Componentes/Icons';
import './ClientesPage.css';

const ClientesPage = () => {
    const [clientes, setClientes] = useState([]);
    const [clienteEditar, setClienteEditar] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const cargar = () => setClientes(getClientes());
    useEffect(() => { cargar(); }, []);

    const handleGuardar = (form) => {
        if (clienteEditar) {
            updateCliente(clienteEditar.id, form);
            setClienteEditar(null);
            setShowForm(false);
        } else {
            addCliente(form);
        }
        cargar();
    };

    const handleEditar = (cliente) => {
        setClienteEditar(cliente);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleEliminar = (id) => {
        if (window.confirm('¿Estás seguro de eliminar este cliente?')) {
            deleteCliente(id);
            cargar();
        }
    };

    const handleCancelar = () => {
        setClienteEditar(null);
        setShowForm(false);
    };

    return (
        <div className="modulo-container">
            <div className="modulo-header">
                <h2 className="modulo-titulo-wrap">
                    <IconUsers size={32} aria-hidden />
                    Gestión de clientes
                </h2>
                <button type="button" className="btn-toggle" onClick={() => { setShowForm(!showForm); setClienteEditar(null); }}>
                    {showForm ? (
                        <>
                            <IconX size={18} aria-hidden />
                            Cerrar
                        </>
                    ) : (
                        <>
                            <IconPlus size={18} aria-hidden />
                            Nuevo cliente
                        </>
                    )}
                </button>
            </div>

            {(showForm || clienteEditar) && (
                <ClientesForm onGuardar={handleGuardar} clienteEditar={clienteEditar} onCancelar={handleCancelar} />
            )}

            <div className="modulo-stats">
                <span>Total clientes: <strong>{clientes.length}</strong></span>
            </div>

            <ClientesTabla clientes={clientes} onEditar={handleEditar} onEliminar={handleEliminar} />
        </div>
    );
};

export default ClientesPage;
