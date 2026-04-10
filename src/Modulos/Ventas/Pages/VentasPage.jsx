import { useState, useEffect } from 'react';
import VentasForm from '../Componentes/VentasForm';
import VentasTabla from '../Componentes/VentasTabla';
import { getVentas, addVenta, updateVenta, deleteVenta } from '../../Services/VentasService';
import { IconClipboardList, IconPlus, IconX } from '../../Componentes/Icons';
import { formatMoneyDisplay } from '../../utils/formatMoney';
import './VentasPage.css';

const VentasPage = () => {
    const [ventas, setVentas] = useState([]);
    const [ventaEditar, setVentaEditar] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const cargar = () => setVentas(getVentas());
    useEffect(() => { cargar(); }, []);

    const handleGuardar = (form) => {
        if (ventaEditar) {
            updateVenta(ventaEditar.id, form);
            setVentaEditar(null);
            setShowForm(false);
        } else {
            addVenta(form);
        }
        cargar();
    };

    const handleEditar = (venta) => {
        setVentaEditar(venta);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleEliminar = (id) => {
        if (window.confirm('¿Estás seguro de eliminar esta venta?')) {
            deleteVenta(id);
            cargar();
        }
    };

    const handleCancelar = () => {
        setVentaEditar(null);
        setShowForm(false);
    };

    const totalGeneral = ventas.reduce((acc, v) => acc + Number(v.total || 0), 0);

    return (
        <div className="modulo-container">
            <div className="modulo-header">
                <h2 className="modulo-titulo-wrap">
                    <IconClipboardList size={32} aria-hidden />
                    Gestión de ventas
                </h2>
                <button type="button" className="btn-toggle" onClick={() => { setShowForm(!showForm); setVentaEditar(null); }}>
                    {showForm ? (
                        <>
                            <IconX size={18} aria-hidden />
                            Cerrar
                        </>
                    ) : (
                        <>
                            <IconPlus size={18} aria-hidden />
                            Nueva venta
                        </>
                    )}
                </button>
            </div>

            {(showForm || ventaEditar) && (
                <VentasForm onGuardar={handleGuardar} ventaEditar={ventaEditar} onCancelar={handleCancelar} />
            )}

            <div className="modulo-stats">
                <span>Total ventas: <strong>{ventas.length}</strong></span>
                <span>Ingresos totales: <strong>{formatMoneyDisplay(totalGeneral)}</strong></span>
            </div>

            <VentasTabla ventas={ventas} onEditar={handleEditar} onEliminar={handleEliminar} />
        </div>
    );
};

export default VentasPage;
